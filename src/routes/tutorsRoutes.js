const express = require('express');
const router = express.Router();
const TutorsController = require('../controllers/tutorsController');

// Rota para listar todos os tutores
router.get('/tutors', TutorsController.getAllTutors);

// Rota para buscar um tutor por ID
router.get('/tutors/:id', TutorsController.getTutorById);

// Rota para cadastrar um novo tutor
router.post('/tutors', TutorsController.createTutor);

// Rota para atualizar um tutor por ID
router.put('/tutors/:id', TutorsController.updateTutor);

// Rota para deletar um tutor por ID
router.delete('/tutors/:id', TutorsController.deleteTutor);

module.exports = router;
