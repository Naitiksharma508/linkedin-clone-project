const express = require('express');
const router = express.Router();

// Importing the controller logic
const authController = require('../controllers/authController');

// Define the routes
// When someone visits POST /api/auth/register,   we will run the 'register' function
router.post('/register', authController.register);

// When someone visits POST /api/auth/login,      we will run the 'login' function
router.post('/login', authController.login);



module.exports = router;