// routes/index.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const app = express();
app.use(express.json());

// Rota raiz
router.get('/', (req, res) => {
  res.send('API funcionando!');
});


router.get('/assignments', (req, res) => {
  res.render('pages/assignments');
});
router.get('/customerservice', (req, res) => {
  res.render('pages/customerservice');
});
router.get('/events', (req, res) => {
  res.render('pages/events');
});
router.get('/timetable', (req, res) => {
  res.render('pages/timetable');
});
router.get('/benes', (req, res) => {
  res.render('pages/benes');
});
router.get('/login', (req, res) => {
  res.render('pages/login');
});
router.get('/profile', (req, res) => {
  res.render('pages/profile');
});
router.get('/reports', (req, res) => {
  res.render('pages/reports');
});

router.get('/users', userController.getAllUsers);       
router.get('/users/:id', userController.getUserById);    
router.post('/users', userController.createUser);      
router.put('/users/:id', userController.updateUserById);     
router.delete('/users/:id', userController.deleteUserById);

module.exports = router;