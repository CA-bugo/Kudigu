const express = require('express');
const router = express.Router();
const userController = require('../controller/userControllers');

// User routes
router.get('/show', userController.getAllUsers);
router.post('/show', userController.createUser);


module.exports = router;
