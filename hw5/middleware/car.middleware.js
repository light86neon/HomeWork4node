// const Car = require('../dataBase/models/Car');
//
// const errorMessage = require('../error/error.messages');
// const errorCodes = require('../constant/errorCodes.enum');
module.exports = {};
// checkIsCarValid: (req, res, next) => {
//     try {
//         const {
//             model, price, producer, preferLang = 'ua'
//         } = req.body;
//
//         if (!model && !price && !producer) {
//             throw new Error(errorMessage.FIELDS_IS_EMPTY[preferLang]);
//         }
//
//         if (!Number.isInteger(price)) {
//             throw new Error(errorMessage.PRICE_IS_NOT_INTEGER[preferLang]);
//         }
//
//         next();
//     } catch (e) {
//         res.status(errorCodes.BAD_REQUEST).json(e.message);
//     }
// },
//
//     checkIsCarExists: async (req, res, next) => {
//     try {
//         const { carId } = req.params;
//         const { preferLang = 'ua' } = req.body;
//
//         const foundCar = await Car.findCarById(+carId);
//
//         if (!foundCar) {
//             throw new Error(errorMessage.CAR_NOT_FOUND[preferLang]);
//         }
//
//         req.user = foundCar;
//
//         next();
//     } catch (e) {
//         res.status(errorCodes.BAD_REQUEST).json(e.message);
//     }
// }
