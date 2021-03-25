const router = require('express').Router();

const userController = require('../controller/user.controller');
const userMiddlewares = require('../middleware/user.middleware');

router.get('/', userController.getAllUsers);

router.get('/:userId', userMiddlewares.checkIsIdValid, userController.findUserById);

router.post('/', userMiddlewares.isUserValid, userController.createUser);
// router.post('/', userMiddlewares.isUserValid, userMiddlewares.checkIsUserExists, userController.createUser);

router.delete('/:userId', userMiddlewares.checkIsIdValid, userController.deleteOneUser);

module.exports = router;
