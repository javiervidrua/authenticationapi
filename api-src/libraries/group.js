const sequelize = require('../libraries/sequelize');
const models = require('../models/init-models')(sequelize);

function add(userEmail, groupName) {
  return new Promise(async (resolve, reject) => {
    await sequelize.sync();

    try {
      const user = await models.users.findOne({
        where: {
          email: userEmail
        }
      });

      const group = await models.groups.create({
        name: groupName
      });

      const usersGroups = await models.users_groups.create({
        user_id: user.id,
        group_id: group.id,
        is_admin: true
      });

      return resolve(group);
    }
    catch (error) {
      console.log(error);
      return reject({ value: -1, msg: "Error creating the group" });
    }
  })
}
module.exports.add = add;

function add_user(userEmail, id, email) {
  return new Promise(async (resolve, reject) => {
    await sequelize.sync();

    try {
      const user = await models.users.findOne({
        where: {
          email: userEmail
        }
      });

      const groups = await models.users_groups.findAll({
        where: {
          user_id: user.id,
          group_id: id
        }
      });

      if (!groups.length) return reject({ value: -1, msg: `Could not find a group with id: ${id}` });
      if (!groups[0].dataValues.is_admin) return reject({ value: -1, msg: `User does not have administrator privileges on the group with id: ${id}` });

      const newUser = await models.users.findOne({
        where: {
          email: email
        }
      });

      await models.users_groups.create({
        user_id: newUser.id,
        group_id: id,
        is_admin: false
      });

      return resolve(newUser);
    }
    catch (error) {
      console.log(error);
      return reject({ value: -1, msg: `User with email: ${email} already belongs to the group with id: ${id}` });
    }
  })
}
module.exports.add_user = add_user;

function get(userEmail) {
  return new Promise(async (resolve, reject) => {
    await sequelize.sync();

    try {
      const user = await models.users.findOne({
        where: {
          email: userEmail
        }
      });

      const groups = await models.users_groups.findAll({
        include: [{
          model: models.groups,
          as: 'group'
        }, {
          model: models.users,
          as: 'user'
        }],
        where: {
          user_id: user.id
        }
      });

      /*const groups = await models.users.findAll({
        attributes: ['users_groups.is_admin','group_id_groups.name'],
        include: [{
          model: models.users_groups,
          as: 'users_groups'
        }, {
          model: models.groups,
          as: 'group_id_groups'
        }],
        where: {
          email: userEmail
        }
      });*/

      return resolve(groups.map((group) => { return { id: group.group_id, name: group.group.name, is_admin: group.is_admin } }));
    }
    catch (error) {
      console.log(error);
      return reject({ value: -1, msg: "Wrong credentials" });
    }
  })
}
module.exports.get = get;

function get_by_id(userEmail, id) {
  return new Promise(async (resolve, reject) => {
    await sequelize.sync();

    try {
      const user = await models.users.findOne({
        where: {
          email: userEmail
        }
      });

      const groups = await models.users_groups.findAll({
        include: [{
          model: models.groups,
          as: 'group'
        }, {
          model: models.users,
          as: 'user'
        }],
        where: {
          user_id: user.id,
          group_id: id
        }
      });

      if (!groups.length) return reject({ value: -1, msg: `Could not find a group with id: ${id}` });

      return resolve(groups.map((group) => { return { id: group.group_id, name: group.group.name, is_admin: group.is_admin } }));
    }
    catch (error) {
      console.log(error);
      return reject({ value: -1, msg: "Wrong credentials" });
    }
  })
}
module.exports.get_by_id = get_by_id;

function get_users(userEmail, id) {
  return new Promise(async (resolve, reject) => {
    await sequelize.sync();

    try {
      const user = await models.users.findOne({
        where: {
          email: userEmail
        }
      });

      const groups = await models.users_groups.findAll({
        where: {
          user_id: user.id,
          group_id: id
        }
      });

      if (!groups.length) return reject({ value: -1, msg: `Could not find a group with id: ${id}` });
      if (!groups[0].dataValues.is_admin) return reject({ value: -1, msg: `User does not have administrator privileges on the group with id: ${id}` });

      const usersGroups = await models.users_groups.findAll({
        where: {
          group_id: id
        }
      });

      const users = await models.users.findAll({
        where: {
          id: usersGroups.map((user) => { return user.dataValues.user_id })
        }
      });

      return resolve(users.map((user) => { return { email: user.email } }));
    }
    catch (error) {
      console.log(error);
      return reject({ value: -1, msg: "Wrong credentials" });
    }
  })
}
module.exports.get_users = get_users;

function remove(userEmail, id) {
  return new Promise(async (resolve, reject) => {
    await sequelize.sync();

    try {
      const user = await models.users.findOne({
        where: {
          email: userEmail
        }
      });

      const groups = await models.users_groups.findAll({
        where: {
          user_id: user.id,
          group_id: id
        }
      });

      if (!groups.length) return reject({ value: -1, msg: `Could not find a group with id: ${id}` });
      if (!groups[0].dataValues.is_admin) return reject({ value: -1, msg: `User does not have administrator privileges on the group with id: ${id}` });

      await models.users_groups.destroy({
        where: {
          group_id: id
        }
      });

      const group = await models.groups.findOne({
        where: {
          id: id
        }
      });
      await models.groups.destroy({
        where: {
          id: id
        }
      });

      return resolve(group);
    }
    catch (error) {
      console.log(error);
      return reject({ value: -1, msg: "Wrong credentials" });
    }
  })
}
module.exports.remove = remove;

function remove_user(userEmail, id, email) {
  return new Promise(async (resolve, reject) => {
    await sequelize.sync();

    try {
      const user = await models.users.findOne({
        where: {
          email: userEmail
        }
      });

      const groups = await models.users_groups.findAll({
        where: {
          user_id: user.id,
          group_id: id
        }
      });

      if (!groups.length) return reject({ value: -1, msg: `Could not find a group with id: ${id}` });
      if (!groups[0].dataValues.is_admin) return reject({ value: -1, msg: `User does not have administrator privileges on the group with id: ${id}` });

      const newUser = await models.users.findOne({
        where: {
          email: email
        }
      });

      const usersGroups = await models.users_groups.findOne({
        where: {
          user_id: newUser.id,
          group_id: id
        }
      });

      if (!usersGroups) reject({ value: -1, msg: `User with email: ${email} does not belong to the group with id: ${id}` });

      await models.users_groups.destroy({
        where: {
          user_id: newUser.id,
          group_id: id,
        }
      });

      return resolve(newUser);
    }
    catch (error) {
      console.log(error);
      return reject({ value: -1, msg: `Could not find an user with email: ${email}` });
    }
  })
}
module.exports.remove_user = remove_user;

function update(userEmail, id, name) {
  return new Promise(async (resolve, reject) => {
    await sequelize.sync();

    try {
      const user = await models.users.findOne({
        where: {
          email: userEmail
        }
      });

      const groups = await models.users_groups.findAll({
        where: {
          user_id: user.id,
          group_id: id
        }
      });

      if (!groups.length) return reject({ value: -1, msg: `Could not find a group with id: ${id}` });
      if (!groups[0].dataValues.is_admin) return reject({ value: -1, msg: `User does not have administrator privileges on the group with id: ${id}` });

      const newGroup = await models.groups.update({ name: name }, {
        where: {
          id: id
        },
        returning: true
      });

      return resolve(newGroup[1][0].dataValues);
    }
    catch (error) {
      console.log(error);
      return reject({ value: -1, msg: "Wrong credentials" });
    }
  })
}
module.exports.update = update;

function update_user(userEmail, id, email, is_admin) {
  return new Promise(async (resolve, reject) => {
    await sequelize.sync();

    try {
      const user = await models.users.findOne({
        where: {
          email: userEmail
        }
      });

      const groups = await models.users_groups.findAll({
        where: {
          user_id: user.id,
          group_id: id
        }
      });

      if (!groups.length) return reject({ value: -1, msg: `Could not find a group with id: ${id}` });
      if (!groups[0].dataValues.is_admin) return reject({ value: -1, msg: `User does not have administrator privileges on the group with id: ${id}` });

      // If the user tries to give up this own admin privileges, only allow to do so if there is at least another admin in the group
      if (userEmail == email && is_admin == false) {
        const groupAdmins = models.users_groups.findAll({
          where: {
            group_id: id,
            is_admin: true
          }
        });
        if (groupAdmins.length <= 1) return reject({ value: -1, msg: `Group with id: ${id} must have at least one administrator at all times. Either set another user as admin or delete the group.` });
      }

      const newUser = await models.users.findOne({
        where: {
          email: email
        }
      });

      await models.users_groups.update({ is_admin: is_admin }, {
        where: {
          user_id: newUser.id,
          group_id: id,
        }
      });

      return resolve(newUser);
    }
    catch (error) {
      console.log(error);
      return reject({ value: -1, msg: `User with email: ${email} does not belong to the group with id: ${id}` });
    }
  })
}
module.exports.update_user = update_user;
