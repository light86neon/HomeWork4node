// const Car = require('../dataBase/models/Car');
const errorMessage = require('../error/error.messages');
const errorCodes = require('../constant/errorCodes.enum');
const { carValidators } = require('../validators');

module.exports = {
    isUserValid: (req, res, next) => {
        try {
            const { error } = carValidators.createCarValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },
    checkIsCarValid: (req, res, next) => {
        try {
            const { carId } = req.params;
            const { preferLang = 'ua' } = req.body;

            const { error } = carValidators.createCarValidator.validate(carId);
            if (error) {
                throw new Error(errorMessage.NOT_VALID_ID[preferLang]);
            }

            next();
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
