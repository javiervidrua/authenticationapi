const config = require('../libraries/config');
const sequelize = require('../libraries/sequelize');
const mail = require('../libraries/mail');
const models = require('../models/init-models')(sequelize);
const { v1: uuidv1, v4: uuidv4, } = require('uuid');
const bcrypt = require('bcrypt');

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

      mail.send(user.email, 'Authentication API sign up', `Click on the following link to verify your account:\n ${config.host}:${config.port}/api/v1/auth/signup/verify?token=${token}`)
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