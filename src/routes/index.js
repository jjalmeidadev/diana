// routes/index.js
const express = require('express');
const router = express.Router();

// Rota raiz
router.get('/', (req, res) => {
  res.send('API funcionando!');
});

router.get('/assignments', (req, res) => {
  res.render('assignments');
});

router.get('/customerservice', (req, res) => {
  res.render('customerservice');
});

router.get('/events', (req, res) => {
  res.render('events');
});

router.get('/timetable', (req, res) => {
  res.render('timetable');
});

module.exports = router;