const config = require('../libraries/config');
const sequelize = require('../libraries/sequelize');
const mail = require('../libraries/mail');
const models = require('../models/init-models')(sequelize);
const { v1: uuidv1, v4: uuidv4, } = require('uuid');
const bcrypt = require('bcrypt');
const moment = require('moment');

function remove(userEmail, userPassword) {
  return new Promise(async (resolve, reject) => {
    await sequelize.sync();

    try {
      let user = await models.users.findOne({
        where: {
          email: userEmail
        }
      });

      user = user.dataValues;

      if (!(await bcrypt.compare(userPassword, user.password))) reject({ value: -2, msg: "Wrong credentials" });

      // Check user's groups before removing the user
      {
        let userGroups = await models.users_groups.findAll({
          where: {
            user_id: user.id
          }
        });
        userGroups = userGroups.map((userGroup) => { return userGroup.group_id });

        let groupUsers, admins = [], groupsToRemove = [];
        await Promise.all(userGroups.map(async (groupId) => {
          groupUsers = await models.users_groups.findAll({
            where: {
              group_id: groupId
            }
          });
          groupUsers = groupUsers.map((user) => { return user.dataValues; });

          // If there is more than 1 user in the group and the current user is the only admin, error out
          if (groupUsers.length > 1 && (groupUsers.filter((user) => { return user.is_admin == true; })).length <= 1) throw (`Remove group with id: ${groupId} or give a member administrator privileges before trying to remove your account`);
          // If there is only one user (current user), add to a list of groups to delete
          else groupsToRemove.push(groupId);
        }));

        // Otherwise, delete the user's groups and the user
        await Promise.all(groupsToRemove.map(async (groupId) => {
          await models.users_groups.destroy({
            where: {
              group_id: groupId
            }
          });
          await models.groups.destroy({
            where: {
              id: groupId
            }
          });
        }));
      }

      await models.users.destroy({
        where: {
          email: userEmail
        }
      });

      // Remove the sensitive data from the user object
      delete user.id;
      delete user.verification_token;
      delete user.password;

      return resolve(user);
    }
    catch (error) {
      console.log(error);
      return reject({ value: -1, msg: error });
    }
  })
}
module.exports.remove = remove;

function get(userEmail) {
  return new Promise(async (resolve, reject) => {
    await sequelize.sync();

    try {
      const user = await models.users.findOne({
        attributes: ['email', 'role', 'verified', 'created', 'last', 'full_name', 'address', 'city', 'postal', 'phone']
      }, {
        where: {
          email: userEmail
        }
      });

      return resolve(user);
    }
    catch (error) {
      console.log(error);
      return reject({ value: -1, msg: "Wrong credentials" });
    }
  })
}
module.exports.get = get;

function recoverpassword(user) {
  return new Promise(async (resolve, reject) => {
    await sequelize.sync();

    try {
      const token = uuidv4();
      const date = moment();
      date.add(-1, 'y'); // Subtract 1 year so we know if the link sent in the email is valid (if the user signs in, the 'last' attribute will be updated in the users table)

      let updatedUser = await models.users.update({
        verification_token: token,
        last: date
      }, {
        where: { email: user.email },
        returning: true
      });
      updatedUser = updatedUser[1][0].dataValues;

      mail.send('Password recovery', user.email, 'Authentication API password recovery', `Make a POST request with a JSON object in the body that uses the following structure:\n{\n\t"password": "yourNewAndSecurePassword"\n}\nto the following URL:\n ${config.host}:${config.port}/api/v1/auth/setpassword?token=${token}`) // https://css-tricks.com/html-forms-in-html-emails/
        .then((data) => { return resolve(updatedUser) })
        .catch((err) => {
          console.log(err);
          return reject({ value: -2, msg: "Error sending email with the link to set the new password" });
        });
    }
    catch (error) {
      console.log(error)
      return resolve(user);
    }
  });
}
module.exports.recoverpassword = recoverpassword;

function setpassword(token, password) {
  return new Promise(async (resolve, reject) => {
    await sequelize.sync();

    try {
      let updatedUser = await models.users.update({
        last: new Date(),
        password: await bcrypt.hash(password, 10), // 10 rounds
      }, {
        where: {
          verification_token: token
        },
        returning: true
      });

      return resolve(updatedUser[1][0].dataValues)
    }
    catch (error) {
      console.log(error)
      return reject(user);
    }
  });
}
module.exports.setpassword = setpassword;

function signup(user) {
  return new Promise(async (resolve, reject) => {
    await sequelize.sync();

    try {
      const token = uuidv4();
      const newUser = await models.users.create({
        verification_token: token,
        email: user.email,
        password: await bcrypt.hash(user.password, 10), // 10 rounds
        full_name: user.full_name,
        address: user.address,
        city: user.city,
        postal: user.postal,
        phone: user.phone,
      });

      mail.send('Account verification', user.email, 'Authentication API sign up', `Click on the following link to verify your account:\n ${config.host}:${config.port}/api/v1/auth/signup/verify?token=${token}`)
        .then((data) => { return resolve(newUser) })
        .catch((err) => {
          console.log(err);
          return reject({ value: -2, msg: "Error sending email with verification token" });
        });
    }
    catch (error) {
      console.log(error)
      return reject({ value: -1, msg: "Email already in use" });
    }
  });
}
module.exports.signup = signup;

function update(userEmail, userData) {
  return new Promise(async (resolve, reject) => {
    await sequelize.sync();

    try {
      let newUser = await models.users.update(userData, {
        where: {
          email: userEmail
        },
        returning: true
      });
      newUser = newUser[1][0].dataValues;

      // Remove the sensitive data
      delete newUser.id;
      delete newUser.verification_token;
      delete newUser.password;

      return resolve(newUser); // Return the user object. Weird array, something like: [1, [{key: val}]]
    }
    catch (error) {
      console.log(error);
      return reject({ value: -1, msg: "Wrong credentials" });
    }
  })
}
module.exports.update = update;

function verify(token) {
  return new Promise(async (resolve, reject) => {
    await sequelize.sync();

    try {
      const newUser = await models.users.update({ verified: true }, {
        where: {
          verification_token: token
        },
        returning: true
      });

      return resolve(newUser[1][0]); // Return the user object. Weird array, something like: [1, [{key: val}]]
    }
    catch (error) {
      console.log(error);
      return reject({ value: -1, msg: "Wrong verification token" });
    }
  })
}
module.exports.verify = verify;