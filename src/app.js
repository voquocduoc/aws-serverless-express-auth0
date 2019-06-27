const express = require('express');
const app = express();
const routes = require('./routes');
const jwt = require('./middlewares');
const morgan = require('morgan');
const bodyParser = require('body-parser');

if (!process.env.AUTH0_DOMAIN || !process.env.AUTH0_AUDIENCE) {
  throw 'Make sure you have AUTH0_DOMAIN, and AUTH0_AUDIENCE in your .env file';
}

// define router here
const UsersRouter = express.Router();
routes.users(UsersRouter);

app.use(morgan('dev'));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", process.env.HOST);
    res.header('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', jwt.checkJwt, UsersRouter);

app.get('/', (req, res) => {
  res.send('Hi');
});

module.exports = app;
