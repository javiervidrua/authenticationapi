const sequelize = require('../libraries/sequelize');
const mail = require('../libraries/mail');
const { v1: uuidv1, v4: uuidv4, } = require('uuid');
const models = require('../models/init-models')(sequelize);

function add(user) {
  //{}
  return new Promise(async (resolve, reject) => {
    await sequelize.sync();

    try {
      const token = uuidv4();
      const newUser = await models.users.create({
        verification_token: token,
        email: user.email,
        password: user.password,
        full_name: user.full_name,
        address: user.address,
        city: user.city,
        postal: user.postal,
        phone: user.phone,
      });

      mail.send(user.email, 'Authentication API sign up', `Click on the following link to verify your account:\n http://localhost:3000/api/v1/auth/signup/verification?token=${token}`)
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

module.exports.add = add;