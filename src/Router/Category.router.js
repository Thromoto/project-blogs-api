const express = require('express');
const { categoryController } = require('../controllers');
const validationToken = require('../middlewares/validationToken');

const categoryRoute = express.Router();

categoryRoute.post('/', validationToken, categoryController.createCategory);

categoryRoute.get('/', validationToken, categoryController.getAll);

module.exports = categoryRoute;