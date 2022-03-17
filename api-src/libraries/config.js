require('dotenv').config();

module.exports.port = process.env.API_PORT;
module.exports.host = process.env.API_HOST;
module.exports.jwtSecret = process.env.API_JWT_SECRET;
module.exports.postgresHost = process.env.API_POSTGRES_HOST;
module.exports.postgresPort = process.env.API_POSTGRES_PORT;
module.exports.postgresDatabase = process.env.API_POSTGRES_DATABASE;
module.exports.postgresUsername = process.env.API_POSTGRES_USERNAME;
module.exports.postgresPassword = process.env.API_POSTGRES_PASSWORD;
module.exports.mailHost = process.env.API_MAIL_HOST;
module.exports.mailPort = process.env.API_MAIL_PORT;
module.exports.mailService = process.env.API_MAIL_SERVICE;
module.exports.mailUsername = process.env.API_MAIL_USERNAME;
module.exports.mailPassword = process.env.API_MAIL_PASSWORD;