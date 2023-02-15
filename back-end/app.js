//DEPENDENCIES
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const playerController = require('./controllers/playerController');

//CONFIGURATION
const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use('/players', playerController);
app.use(bodyParser.urlencoded({ extended: true }));

//ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to PGA Top 15 Players Review App!');
});

//ERROR 404 ROUTE
app.get('*', (req, res) => {
  res.status(404).send('Something wrong! Page Not Found!');
});

//EXPORT
module.exports = app;
