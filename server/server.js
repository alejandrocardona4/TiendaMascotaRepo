const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware para servir archivos estáticos desde "public"
app.use(express.static(path.join(__dirname, 'frontend')));

// Ruta principal (opcional, ya sirve index.html automáticamente)
app.get('/', (req, res) => {
  console.log('Alguien pidió la página principal');
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor levantado en http://localhost:${PORT}`);
});

// Simulamos una "base de datos"
const productos = [
  {
    id: 1,
    nombre: "Croquetas para perro",
    precio: 45000,
    descripcion: "Bolsa de 3kg sabor carne",
    imagen: "imagen1.png"
  },
  {
    id: 2,
    nombre: "Juguete para gato",
    precio: 12000,
    descripcion: "Ratón de tela con catnip",
    imagen: "imagen2.png"
  }
];

// Ruta que responde con los productos en formato JSON
app.get('/api/productos', (req, res) => {
  res.json(productos);
});



