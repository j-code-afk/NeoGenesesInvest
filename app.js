const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve os arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'Front-end')));

// Roda o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
