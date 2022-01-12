const Joi = require("./JoiSchema");
exports.registeration = (req, res, next) => {
  const body = req.body;
  const { error, value } = Joi.schema.validate(body);
  if (error) return res.status(400).send({ error: error.details[0].message });
  next();
};

exports.data = (req, res, next) => {
  const body = req.body;
  const { error, value } = Joi.dataSchema.validate(body);
  if (error) return res.status(400).send({ error: error.details[0].message });
  next();
};
