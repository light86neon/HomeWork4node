const router = require('express').Router();

const userRouter = require('./user.router');
const carRouter = require('./car.router');

router.use('/car', carRouter);

router.use('/users', userRouter);

module.exports = router;
