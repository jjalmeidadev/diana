const express = require('express');
const path = require('path'); // Import path module
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para processar JSON
app.use(express.json());

// Configuração do mecanismo de visualização
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Serve static files from the assets directory
app.use('/assets', express.static(path.join(__dirname, '../assets')));

// Also serve from the src level for relative paths
app.use(express.static(path.join(__dirname)));

// Serve static files from the public/css directory
app.use('/public', express.static(path.join(__dirname, '/public')));

// Rotas
const usersRoutes = require('./routes/usersRoutes');
const indexRoutes = require('./routes/index');
const searchRoute = require('./routes/search'); // Ensure the search route is imported and mounted

app.use('/', usersRoutes);   // This route defines /profile with student data.
app.use('/', indexRoutes);   // Remove or disable the /profile route here.
app.use('/search', searchRoute); // Route to handle search requests

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});