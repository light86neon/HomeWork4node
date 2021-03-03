const router = require('express').Router();

const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getAllUsers);

router.get('/:id', userMiddleware.isUserValid, userController.findUserById);

router.post('/', userMiddleware.checkIsUserExists, userController.createUser);

router.delete('/:id', userMiddleware.checkIsIdValid, userController.deleteOneUser);

module.exports = router;
