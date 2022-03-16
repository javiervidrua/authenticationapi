const config = require('../libraries/config');
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

      resolve(group);
    }
    catch (error) {
      console.log(error);
      reject({ value: -1, msg: "Error creating the group" });
    }
  })
}
module.exports.add = add;

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
        //attributes: ['users_groups.is_admin','group.name'],
        include: [{
          model: models.groups,
          as: 'group'
        },{
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

      resolve(groups.map( (group) => { return { id: group.group_id, name: group.group.name, is_admin: group.is_admin } }));
    }
    catch (error) {
      console.log(error);
      reject({ value: -1, msg: "Wrong credentials" });
    }
  })
}
module.exports.get = get;
