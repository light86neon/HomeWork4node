const carService = require('../service/car.service');
const errorCodes = require('../constant/errorCodes.enum');
const errorMessage = require('../error/error.messages');

module.exports = {
    getAllCars: async (req, res) => {
        try {
            const cars = await carService.getAllCars();

            res.json(cars);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    },

    findCarById: async (req, res) => {
        try {
            const { carId } = req.params;
            const car = await carService.findCarById(carId);

            res.json(car);
        } catch (e) {
            res.json(e);
        }
    },

    createCar: async (req, res) => {
        try {
            const { preferLang = 'ua' } = req.body;
            await carService.createCar(req.body);

            res.status(errorCodes.CREATED).json(errorMessage.CREATED_CAR[preferLang]);
        } catch (e) {
            res.json(e);
        }
    },

    deleteCar: async (req, res) => {
        try {
            const { preferLang = 'ua' } = req.body;
            await carService.deleteCar(req.params);

            res.status(errorCodes.DELETED).json(errorMessage.DELETE_CAR[preferLang]);
        } catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message);
        }
    }
};
