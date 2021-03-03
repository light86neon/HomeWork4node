const Joi = require('joi');

module.exports = Joi.object({
    name: Joi.string().alphanum().min(2).max(50),
    price: Joi.number().integer()
});
