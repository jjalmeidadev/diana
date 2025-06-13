// routes/index.js
const express = require('express');
const router = express.Router();

// Rota raiz
router.get('/', (req, res) => {
  res.render('pages/login');
});

const usersRoutes = require('./usersRoutes');
router.use('/', usersRoutes);

module.exports = router;