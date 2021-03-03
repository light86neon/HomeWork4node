const Car = require('../dataBase/models/Car');

module.exports = {
    getAllCars: () => Car.find(),

    findCarById: (carId) => Car.findCarById(carId),

    createCar: (carObject) => Car.create(carObject),

    deleteCar: (carId) => Car.delete(carId)
};
