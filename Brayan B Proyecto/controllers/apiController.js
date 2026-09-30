const Product = require('../models/product');
const User = require('../models/user');
const Order = require('../models/order');

//Productos
const saveProduct = (req, res) => {
    let product = new Product();
    product.nombre = req.body.nombre;
    product.precio = req.body.precio;
    product.stock = req.body.stock;

    product.save()
        .then(productStored => res.status(200).send({ message: 'Producto guardado', product: productStored }))
        .catch(err => res.status(500).send({ message: 'Error', error: err }));
};

const getProducts = (req, res) => {
    Product.find({})
        .then(products => res.status(200).send({ products }))
        .catch(err => res.status(500).send({ error: err }));
};

//Usuarios
const saveUser = (req, res) => {
    let user = new User();
    user.nombre = req.body.nombre;
    user.email = req.body.email;
    user.telefono = req.body.telefono;

    user.save()
        .then(userStored => res.status(200).send({ message: 'Usuario guardado', user: userStored }))
        .catch(err => res.status(500).send({ message: 'Error', error: err }));
};

const getUsers = (req, res) => {
    User.find({})
        .then(users => res.status(200).send({ users }))
        .catch(err => res.status(500).send({ error: err }));
};

//Pedidos
const saveOrder = (req, res) => {
    let order = new Order();

    //Se envian los IDs del usuario y producto
    order.cliente = req.body.cliente; 
    order.producto = req.body.producto;
    order.cantidad = req.body.cantidad;

    order.save()
        .then(orderStored => res.status(200).send({ message: 'Pedido guardado', order: orderStored }))
        .catch(err => res.status(500).send({ message: 'Error', error: err }));
};

const getOrders = (req, res) => {
    Order.find({})
        .then(orders => res.status(200).send({ orders }))
        .catch(err => res.status(500).send({ error: err }));
};

//Exp Funciones
module.exports = {
    saveProduct, getProducts,
    saveUser, getUsers,
    saveOrder, getOrders
};