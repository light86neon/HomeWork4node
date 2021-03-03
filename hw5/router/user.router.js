const router = require('express').Router();

const userController = require('../controller/user.controller');
const { userMiddlewares } = require('../middleware');

router.get('/', userController.getAllUsers);

router.get('/:id', userMiddlewares.isUserValid, userController.findUserById);

router.post('/', userMiddlewares.checkIsUserExists, userController.createUser);

router.delete('/:id', userMiddlewares.checkIsIdValid, userController.deleteOneUser);

module.exports = router;
