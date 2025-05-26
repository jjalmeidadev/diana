const ReportsModel = require('../models/reportsModel');

async function getAllReports(req, res) {
  try {
    const reports = await ReportsModel.getAllReports();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar relatórios' });
  }
}

async function getReportById(req, res) {
  try {
    const report = await ReportsModel.getReportById(req.params.id);
    if (!report) return res.status(404).json({ error: 'Relatório não encontrado' });
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar relatório' });
  }
}

async function createReport(req, res) {
  try {
    const newReport = await ReportsModel.createReport(req.body);
    res.status(201).json(newReport);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar relatório' });
  }
}

module.exports = {
  getAllReports,
  getReportById,
  createReport,
};
