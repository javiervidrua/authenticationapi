require('dotenv').config();

module.exports.jwtSecret = process.env.API_JWT_SECRET;
module.exports.postgresHost = process.env.API_POSTGRES_HOST;
module.exports.postgresPort = process.env.API_POSTGRES_PORT;
module.exports.postgresDatabase = process.env.API_POSTGRES_DATABASE;
module.exports.postgresUsername = process.env.API_POSTGRES_USERNAME;
module.exports.postgresPassword = process.env.API_POSTGRES_PASSWORD;