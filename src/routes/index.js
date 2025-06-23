// routes/index.js
const express = require('express');
const router = express.Router();

// Rotas principais
router.get('/', (req, res) => {
  res.render('pages/login');
});

router.get('/benes', (req, res) => {
  res.render('pages/benes');
});

router.get('/assignments', (req, res) => {
  res.render('pages/assignments');
});

router.get('/choose', (req, res) => {
  res.render('pages/choose');
});

router.get('/communication', (req, res) => {
  res.render('pages/communication');
});

router.get('/customerservice', (req, res) => {
  res.render('pages/customerservice');
});

router.get('/login', (req, res) => {
  res.render('pages/login');
});

router.get('/reports', (req, res) => {
  res.render('pages/reports');
});

router.get('/timetable', (req, res) => {
  res.render('pages/timetable');
});


module.exports = router;