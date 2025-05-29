const express = require('express');
const router = express.Router();
const SubjectsController = require('../controllers/subjects.controller');

// Rota para listar todas as disciplinas
router.get('/', SubjectsController.getAllSubjects);

// Rota para buscar uma disciplina por ID
router.get('/:id', SubjectsController.getSubjectById);

// Rota para criar uma nova disciplina
router.post('/', SubjectsController.createSubject);

module.exports = router;
