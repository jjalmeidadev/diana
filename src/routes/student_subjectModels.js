const express = require('express');
const router = express.Router();
const StudentSubjectController = require('../controllers/student_subject.controller');

// Rota para listar todas as relações aluno-disciplina
router.get('/', StudentSubjectController.getAllStudentSubjects);

// Rota para buscar uma relação por ID
router.get('/:id', StudentSubjectController.getStudentSubjectById);

// Rota para criar uma nova relação aluno-disciplina
router.post('/', StudentSubjectController.createStudentSubject);

module.exports = router;
