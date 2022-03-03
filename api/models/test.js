const joi = require("joi");

// Request validation
const schema = joi
  .object()
  .keys({
    status: joi.string(),
  })
  .required();

module.exports.schema = schema; // require('./test').validate(objectToValidate);

// Here will come the Sequelize model with its corresponding export