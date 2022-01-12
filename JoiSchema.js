const Joi = require("joi");
exports.schema = Joi.object({
  name: Joi.string().min(6).max(12).required(),
  age: Joi.number().min(18).max(50).required(),
  email: Joi.string().email(),
});

exports.dataSchema = Joi.object({
  mobile: Joi.number().required(),
  address: Joi.string().required(),
});
