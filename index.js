const express = require('express');
const app = express();

const PORT = 5000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('Bienvenido a mi aplicación Express');
});

// Ruta para mostrar 3 clientes
app.get('/clientes', (req, res) => {
  const clientes = ['Cliente 1: Manzana', 'Cliente 2: Mae', 'Cliente 3: Bob'];
  res.json(clientes);
});

// Ruta para mostrar 3 productos
app.get('/productos', (req, res) => {
  const productos = ['Producto 1: Cargador', 'Producto 2: Donas', 'Producto 3: Caramelo'];
  res.json(productos);
});

app.listen(PORT, () => {
  console.log(`La aplicación está corriendo en http://localhost:${PORT}`);
});
