const express = require('express');
const router = express.Router();
const StudentsController = require('../controllers/studentsController');

// Rota para listar todos os alunos
router.get('/students', StudentsController.getAllStudents);

// Rota para buscar um aluno por ID
router.get('/students/:id', StudentsController.getStudentById);

// Rota para criar um novo aluno
router.post('/students', StudentsController.createStudent);

// Rota para atualizar um aluno por ID
router.put('/students/:id', StudentsController.updateStudentById);

// Rota para deletar um aluno por ID
router.delete('/students/:id', StudentsController.deleteStudentById);

module.exports = router;
