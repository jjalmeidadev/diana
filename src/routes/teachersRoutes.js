const express = require('express');
const router = express.Router();
const TeachersController = require('../controllers/teachersController');



// Rota para listar todos os professores
router.get('/teachers', TeachersController.getAllTeachers);

// Rota para buscar um professor por ID
router.get('/teachers/:id', TeachersController.getTeacherById);

// Rota para cadastrar um novo professor
router.post('/teachers', TeachersController.createTeacher);

// Rota para atualizar um professor por ID
router.put('/teachers/:id', TeachersController.updateTeacherById);

// Rota para deletar um professor por ID
router.delete('/teachers/:id', TeachersController.deleteTeacherById);

module.exports = router;
