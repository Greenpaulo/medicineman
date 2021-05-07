const express = require('express');
const { registerUser, login, getMe, forgotPassword, resetPassword } = require('../controllers/auth');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', login);
router.get('/me', protect, getMe);
router.get('/forgotpassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);

module.exports = router;

