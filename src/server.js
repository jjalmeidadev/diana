const express = require('express');
const path = require('path'); // Import path module
const app = express();
const PORT = process.env.PORT || 1234;

// Middleware para processar JSON
app.use(express.json());

// Configuração do mecanismo de visualização
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Serve static files from the assets directory
app.use('/assets', express.static(path.join(__dirname, '../assets')));
// Also serve from the src level for relative paths
app.use(express.static(path.join(__dirname)));

// Rotas
const routes = require('./routes/index');
app.use('/', routes);

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});