const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_groups', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'groups',
        key: 'id'
      }
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'users_groups',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_groups_pkey",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "group_id" },
        ]
      },
    ]
  });
};
