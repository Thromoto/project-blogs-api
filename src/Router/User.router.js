const express = require('express');
const { userController } = require('../controllers');
const validationToken = require('../middlewares/validationToken');
const validationUser = require('../middlewares/validationUser');

const userRoute = express.Router();

userRoute.post('/', validationUser, userController.createUser);

userRoute.get('/', validationToken, userController.getAllUsers);

module.exports = userRoute;