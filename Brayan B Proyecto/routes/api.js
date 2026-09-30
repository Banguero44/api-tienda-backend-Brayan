const express = require('express');
const apiController = require('../controllers/apiController');

const api = express.Router();

//Rutas para productos
api.post('/producto', apiController.saveProduct);
api.get('/productos', apiController.getProducts);

//Rutas para usuarios
api.post('/usuario', apiController.saveUser);
api.get('/usuarios', apiController.getUsers);

//Rutas para pedidos
api.post('/pedido', apiController.saveOrder);
api.get('/pedidos', apiController.getOrders);

module.exports = api;