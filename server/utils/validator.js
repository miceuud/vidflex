const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
  password: Joi.string().pattern(new RegExp("/^[a-z]{1}[a-z0-9_]{3,13}$/")),
  repeat_password: Joi.ref("password"),
});

module.exports = schema;
