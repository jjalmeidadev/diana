// routes/index.js
const express = require('express');
const router = express.Router();

// Rota raiz
router.get('/', (req, res) => {
  res.render('pages/login');
});

const usersRoutes = require('./usersRoutes');
router.use('/', usersRoutes);

// Exemplo correto de definição de rota
router.get('/rota-exemplo', (req, res) => {
  res.send('Esta é uma rota de exemplo');
});

// Outras rotas...
router.get('/benes', (req, res) => {
  res.render('pages/benes');
});

module.exports = router;