const express = require('express');
const router = express.Router();
const StudentsController = require('../controllers/students.controller');

// Rota para listar todos os alunos
router.get('/', StudentsController.getAllStudents);

// Rota para buscar um aluno por ID
router.get('/:id', StudentsController.getStudentById);

// Rota para criar um novo aluno
router.post('/', StudentsController.createStudent);

module.exports = router;
