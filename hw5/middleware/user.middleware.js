const { errorMessage } = require('../error');
const { errorCodesEnum } = require('../constant');
const { userValidators } = require('../validators');

module.exports = {
    isUserValid: (req, res, next) => {
        try {
            const { error } = userValidators.createUserValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            next();
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
    checkIsIdValid: (req, res, next) => {
        try {
            const { userId } = req.body;
            const { preferLang = 'ua' } = req.body;

            const { error } = userValidators.createUserValidator.validate(userId);
            if (error) {
                throw new Error(errorMessage.NOT_VALID_ID[preferLang]);
            }

            next();
        } catch (e) {
            res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
        }
    },
};
