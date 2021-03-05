const router = require('express').Router();

const carController = require('../controller/car.controller');
const carMiddleware = require('../middleware/car.middleware');

router.get('/', carController.getAllCars);

router.get('/:id', carMiddleware.checkIsCarValid, carController.findCarById);

router.post('/', carMiddleware.checkIsCarExists, carMiddleware.checkIsCarValid, carController.createCar);

router.delete('/:id', carMiddleware.checkIsCarValid, carController.deleteCar);

module.exports = router;
