const express = require('express');
const router = express.Router();
const SubjectsController = require('../controllers/subjectsController');

// Rota para listar todas as disciplinas
router.get('/subjects', SubjectsController.getAllSubjects);

// Rota para buscar uma disciplina por ID
router.get('/subjects/:id', SubjectsController.getSubjectById);

// Rota para criar uma nova disciplina
router.post('/subjects', SubjectsController.createSubject);

// Rota para atualizar uma disciplina por ID
router.put('/subjects/:id', SubjectsController.updateSubject);

// Rota para deletar uma disciplina por ID
router.delete('/subjects/:id', SubjectsController.deleteSubject);

module.exports = router;
