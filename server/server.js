const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware para servir archivos estáticos desde "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal (opcional, ya sirve index.html automáticamente)
app.get('/', (req, res) => {
  console.log('Alguien pidió la página principal');
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor levantado en http://localhost:${PORT}`);
});


