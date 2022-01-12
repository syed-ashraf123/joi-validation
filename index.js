const Joi = require("joi");

const name = Joi.string().min(6);

const schema = Joi.object({
  fullName: name,
  firstName: Joi.string(),
  lastName: Joi.string(),
  type: Joi.string().valid("Student", "Teacher"),
  card: Joi.string().creditCard(),
  indian: Joi.boolean(),
  joined: Joi.date().greater("12-31-2020"),
  number: Joi.number().precision(0),
  username: Joi.string().custom((value, helper) => {
    if (value.length < 10)
      return helper.message("Length of username should be hgreater than 10");
    return true;
  }),
  backlogs: Joi.array().items(
    Joi.object({
      sub: Joi.string().required(),
      marks: Joi.number().required(),
    })
  ),
  age: Joi.when("type", {
    is: "Student",
    then: Joi.number().max(30).min(20),
    otherwise: Joi.number().min(30).max(60),
  }),
})
  .xor("fullName", "firstName")
  .and("firstName", "lastName");

const payload = {
  number: 24.123,
  username: "Syed Ashraf",
  fullName: "Syed Ashraf",
  //   firstName: "Syed",
  //   lastName: "Ashraf",
  type: "Student",
  card: "4242424242424242",
  indian: "true",
  age: 20,
  backlogs: [
    { sub: "maths", marks: 24 },
    { sub: "maths", marks: 24 },
  ],
  joined: "11-24-2022",
};
const { error, value } = schema.validate(payload);
if (error) {
  console.log(error.message);
} else console.log(value);
