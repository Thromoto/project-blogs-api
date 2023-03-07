const express = require('express');
const { loginController } = require('../controllers');

const loginRoute = express.Router();

loginRoute.post('/', loginController);

module.exports = loginRoute;
