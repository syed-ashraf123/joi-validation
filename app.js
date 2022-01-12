const Joi = require("joi");
const complex = require("joi-password-complexity");
const schema = Joi.object({
  name: Joi.string().min(6).max(12).required(),
  username: Joi.string().alphanum().min(6).max(12),
  age: Joi.number().integer().min(1).max(80).required(),
  password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{8,30}$")).required(),
  confirm_password: Joi.ref("password"),
  amount: Joi.number(),
  token: Joi.any(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "in"] },
  }),
});

const payload = {
  name: "Syedashraf",
  username: "Syed4Ashrf",
  password: "Xas45785aa",
  confirm_password: "Xas45785aa1",
  age: 25,
  token: [1, 2, 4, 5, 6, 5],
  email: "syoasgmai@l.in",
};
const { error, value } = schema.validate(payload);
if (error) {
  console.log(error.message);
} else console.log(value);
