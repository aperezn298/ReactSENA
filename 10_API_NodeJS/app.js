const express = require('express');
const sequelize = require('./config/database'); // Conexión a la base de datos
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');

const app = express();
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', productRoutes);

// Sincronizar los modelos con la base de datos
sequelize.sync({ alter: true }) // Usa alter para hacer que coincida con la estructura sin perder datos
  .then(() => {
    console.log('Tablas sincronizadas');
    app.listen(3000, () => {
      console.log('Servidor corriendo en el puerto 3000');
    });
  })
  .catch(err => console.error('Error al sincronizar la base de datos', err));
