const express = require('express');
const router = express.Router();
const ReportsController = require('../controllers/reports.controller');

// Rota para listar todos os relatórios
router.get('/', ReportsController.getAllReports);

// Rota para buscar um relatório por ID
router.get('/:id', ReportsController.getReportById);

// Rota para criar um novo relatório
router.post('/', ReportsController.createReport);

module.exports = router;
