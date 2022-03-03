const joi = require("joi");

const testSchema = joi
  .object()
  .keys({
    status: joi.string(),
  })
  .required();

module.exports.testSchema = testSchema;
