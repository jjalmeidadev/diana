const express = require('express');
const router = express.Router();
const ReportsController = require('../controllers/reportsController');



// Rota para listar todos os relatórios
router.get('/reports', ReportsController.getAllReports);

// Rota para buscar um relatório por ID
router.get('/reports/:id', ReportsController.getReportById);

// Rota para criar um novo relatório
router.post('/reports', ReportsController.createReport);

// Rota para atualizar um relatório por ID
router.put('/reports/:id', ReportsController.updateReportById);

// Rota para deletar um relatório por ID
router.delete('/reports/:id', ReportsController.deleteReportById);

module.exports = router;
