const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = Schema({
    nombre: String,
    precio: Number,
    stock: Number
});

module.exports = mongoose.model('Product', ProductSchema);