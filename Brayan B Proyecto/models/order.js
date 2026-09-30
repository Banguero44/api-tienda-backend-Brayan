const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = Schema({
    cliente: { type: Schema.ObjectId, ref: 'User' },
    producto: { type: Schema.ObjectId, ref: 'Product' },
    cantidad: Number,
    fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);