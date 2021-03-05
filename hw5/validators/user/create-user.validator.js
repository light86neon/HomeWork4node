const Joi = require('joi');

const { constants, regexpEnum } = require('../../constant');
//
// const carsSubSheme = Joi.array().items(
//     Joi.object({
//         name: Joi.string().alphanum().min(2).max(50),
//         price: Joi.number().integer()
//     })
// );

module.exports = Joi.object({
    name: Joi.string().alphanum().min(2).max(50),
    email: Joi.string().regex(regexpEnum.EMAIL_REGEXP).required(),
    password: Joi.string().regex(regexpEnum.PASSWORD_REGEXP).required(),
    age: Joi.number().integer().min(3).max(120),
    car: Joi.boolean(),
    yearOfBirth: Joi.number().integer().min(constants.CURRENT_YEAR - 100).max(constants.CURRENT_YEAR),
    // cars: carsSubSheme.optional().when('producer', { is: true, then: Joi.required() })

});
