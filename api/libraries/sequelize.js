// This file is used so sequelize gets initialized in only one place, and it works because in Node.js all imports refering to the same file act as a singleton in memory
const { Sequelize } = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.postgresDatabase, config.postgresUsername, config.postgresPassword, {
  dialect: 'postgres',
  host: config.postgresHost,
  port: config.postgresPort,
  //logging: false
});

module.exports = sequelize;