const router = require('express').Router();
const userRouter = require('./users');
const requestRouter = require('./request');
const authRouter = require('./auth');

router.use('/users', userRouter);
router.use('/request', requestRouter);
router.use('/auth', authRouter);

module.exports = router;



