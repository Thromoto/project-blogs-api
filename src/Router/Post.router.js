const express = require('express');
const { postController } = require('../controllers');
const validationToken = require('../middlewares/validationToken');

const postRoute = express.Router();

postRoute.get('/', validationToken, postController.getAllPost);

postRoute.get('/:id', validationToken, postController.getPostById);

module.exports = postRoute;