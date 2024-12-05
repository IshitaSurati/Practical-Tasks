const express = require('express');
const router = express.Router();
const { signup, login, profile } = require('../controllers/userController');
const authenticate = require('../middlewares/authMiddleware');

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', authenticate, profile);

module.exports = router;
