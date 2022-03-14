const nodemailer = require('nodemailer');
const config = require('./config');

const mailTransporter = nodemailer.createTransport({
  auth: {
    user: config.mailUsername,
    pass: config.mailPassword
  },
  debug: false,
  logger: true, // set to true for debugging
  host: config.mailHost,
  port: config.mailPort,
  secure: false,
  service: config.mailService,
});

function send(to, subject, text) {
  return new Promise((resolve, reject) => {
    let mailDetails = {
      from: `Account verification <${config.mailUsername}>`, // https://nodemailer.com/message/addresses/
      to: to,
      subject: subject,
      text: text
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

module.exports.send = send;