const router = require('express').Router();

const userRoutes = require('./userRoutes');
router.use('/users', userRoutes);

const chatRoutes = require('./chatRoutes');
router.use('/chat', chatRoutes);

module.exports = router;