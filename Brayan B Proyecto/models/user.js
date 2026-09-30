const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
    nombre: String,
    email: String,
    telefono: String
});

module.exports = mongoose.model('User', UserSchema);