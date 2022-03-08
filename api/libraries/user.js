const { DataTypes } = require('sequelize');
const sequelize = require('../libraries/sequelize');
const { v1: uuidv1, v4: uuidv4, } = require('uuid');
const Users = require('../models/users')(sequelize, DataTypes);

async function add(user) {
  await sequelize.sync();

  try {
    const newUser = await Users.create({
      verification_token: uuidv4(),
      email: user.email,
      password: user.password,
      full_name: user.full_name,
      address: user.address,
      city: user.city,
      postal: user.postal,
      phone: user.phone,
    });

    return newUser;
  }
  catch (error) {
    return -1;
  }
}

module.exports.add = add;