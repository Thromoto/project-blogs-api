const express = require('express');
const categoryRoute = require('./Router/Category.router');
const loginRoute = require('./Router/Login.router');
const postRoute = require('./Router/Post.router');
const userRoute = require('./Router/User.router');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRoute);

app.use('/user', userRoute);

app.use('/categories', categoryRoute);

app.use('/post', postRoute);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
