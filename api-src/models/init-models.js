var DataTypes = require("sequelize").DataTypes;
var _groups = require("./groups");
var _users = require("./users");
var _users_groups = require("./users_groups");

function initModels(sequelize) {
  var groups = _groups(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var users_groups = _users_groups(sequelize, DataTypes);

  groups.belongsToMany(users, { as: 'user_id_users', through: users_groups, foreignKey: "group_id", otherKey: "user_id" });
  users.belongsToMany(groups, { as: 'group_id_groups', through: users_groups, foreignKey: "user_id", otherKey: "group_id" });
  users_groups.belongsTo(groups, { as: "group", foreignKey: "group_id"});
  groups.hasMany(users_groups, { as: "users_groups", foreignKey: "group_id"});
  users_groups.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(users_groups, { as: "users_groups", foreignKey: "user_id"});

  return {
    groups,
    users,
    users_groups,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
