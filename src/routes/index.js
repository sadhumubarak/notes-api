const express = require('express');

const User = require('./User');
const Feed = require('./Feed');
const LogInController = require('../controllers/LoginController');
const LogOutController = require('../controllers/LogOutController');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.use('/user', User);
router.use('/feed', Feed);
router.use('/login', LogInController);
router.get('/logout', authMiddleware, LogOutController);

module.exports = router;
