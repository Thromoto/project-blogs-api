const express = require('express');
const { userController } = require('../controllers');
const validationUser = require('../middlewares/validationUser');

const userRoute = express.Router();

userRoute.post('/', validationUser, userController.createUser);

module.exports = userRoute;