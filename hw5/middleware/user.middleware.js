// const userService = require('../service/user.service');
//
// const { errorMessage } = require('../error');
// const { errorCodesEnum } = require('../constant');
// const { userValidators } = require('../validators');

module.exports = {

    // checkIsIdValid: (req, res, next) => {
    //     try {
    //         const { preferLang = 'ua' } = req.body;
    //         const { userId } = req.params;
    //
    //         if (+userId < 0 || !Number.isInteger(+userId) || Number.isNaN(+userId)) {
    //             throw new Error(errorMessage.NOT_VALID_ID[preferLang]);
    //         }
    //
    //         next();
    //     } catch (e) {
    //         res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
    //     }
    // },
    //
    // checkIsUserExists: async (req, res, next) => {
    //     try {
    //         const { userId } = req.params;
    //         const { preferLang = 'ua' } = req.body;
    //
    //         const foundUser = await userService.findUserById(+userId);
    //
    //         if (!foundUser) {
    //             throw new Error(errorMessage.USER_NOT_FOUND[preferLang]);
    //         }
    //
    //         req.user = foundUser;
    //
    //         next();
    //     } catch (e) {
    //         res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
    //     }
    // },
    //
    // isUserValid: (req, res, next) => {
    //     try {
    //        const { error } = userValidators.createUserValidator.validate(req.body);
    //
    //        if (error) {
    //            throw new Error(error.details[0].message);
    //        }
    //
    //         next();
    //     } catch (e) {
    //         res.status(errorCodesEnum.BAD_REQUEST).json(e.message);
    //     }
    // }
};
