const express = require('express');
const router = express.Router();
const StudentSubjectController = require('../controllers/student_subjectController');

// Rota para listar todas as relações aluno-disciplina
router.get('/student_subject', StudentSubjectController.getAllStudentSubjects);

// Rota para buscar uma relação aluno-disciplina por ID
router.get('/student_subject/:id', StudentSubjectController.getStudentSubjectById);

// Rota para criar uma nova relação aluno-disciplina
router.post('/student_subject', StudentSubjectController.createStudentSubject);

// Rota para atualizar um aluno-disciplina por ID
router.put('/student_subject/:id', StudentSubjectController.updateStudentSubjectById);

// Rota para deletar um aluno-disciplina por ID
router.delete('/student_subject/:id', StudentSubjectController.deleteStudentSubjectById);

module.exports = router;
