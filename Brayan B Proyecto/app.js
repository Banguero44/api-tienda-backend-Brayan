const express = require('express');
const api_routes = require('./routes/api');

const app = express();

//Config puerto
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Rutas base
app.use('/api', api_routes);

module.exports = app;