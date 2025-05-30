const express = require('express');
const router = express.Router();
const YearCodeController = require('../controllers/year_CodeController');

// Rota para listar todos os year_Code
router.get('/year_Code', YearCodeController.getAllYearCodes);

// Rota para buscar um year_Code por ID
router.get('/year_Code/:id', YearCodeController.getYearCodeById);

// Rota para cadastrar um novo year_Code
router.post('/year_Code', YearCodeController.createYearCode);

// Rota para atualizar um year_Code por ID
router.put('/year_Code/:id', YearCodeController.updateYearCode);

// Rota para deletar um year_Code por ID
router.delete('/year_Code/:id', YearCodeController.deleteYearCode);

module.exports = router;
