const config = require('../libraries/config');
const sequelize = require('../libraries/sequelize');
const mail = require('../libraries/mail');
const models = require('../models/init-models')(sequelize);
const { v1: uuidv1, v4: uuidv4, } = require('uuid');
const bcrypt = require('bcrypt');
const moment = require('moment');

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
        .then((data) => resolve(updatedUser))
        .catch((err) => {
          console.log(err);
          reject({ value: -2, msg: "Error sending email with the link to set the new password" });
        });
    }
    catch (error) {
      console.log(error)
      resolve(user);
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

      resolve(updatedUser[1][0].dataValues)
    }
    catch (error) {
      console.log(error)
      reject(user);
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
        .then((data) => resolve(newUser))
        .catch((err) => {
          console.log(err);
          reject({ value: -2, msg: "Error sending email with verification token" });
        });
    }
    catch (error) {
      console.log(error)
      reject({ value: -1, msg: "Email already in use" });
    }
  });
}
module.exports.signup = signup;

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

      resolve(newUser[1][0]); // Return the user object. Weird array, something like: [1, [{key: val}]]
    }
    catch (error) {
      console.log(error);
      reject({ value: -1, msg: "Wrong verification token" });
    }
  })
}
module.exports.verify = verify;