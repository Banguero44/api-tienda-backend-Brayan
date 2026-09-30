const mongoose = require('mongoose');
const app = require('./app');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/mitiendadb')
  .then(() => {
    console.log('Conexión a MongoDB establecida con éxito.');

    app.listen(app.get('port'), () => {
      console.log(`Servidor corriendo en http://localhost:${app.get('port')}`);
    });
  })
  .catch(err => console.error('Error al conectar a MongoDB:', err));