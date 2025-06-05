const ReportsModel = require('../models/reportsModel');

async function getAllReports(req, res) {
  try {
    const reports = await ReportsModel.getAllReports();
    res.json(reports);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar relatórios' });
  }
}

async function getReportById(req, res) {
  try {
    const report = await ReportsModel.getReportById(req.params.id);
    if (!report) return res.status(404).json({ error: 'Relatório não encontrado' });
    res.json(report);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar relatório' });
  }
}

async function createReport(req, res) {
  try {
    const newReport = await ReportsModel.createReport(req.body);
    res.status(201).json(newReport);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar relatório' });
  }
}

async function updateReportById(req, res) {
  try {
    const updatedReport = await ReportsModel.updateReportById(req.params.id, req.body);
    if (!updatedReport) return res.status(404).json({ error: 'Relatório não encontrado' });
    res.json(updatedReport);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao atualizar relatório' });
  }
}

async function deleteReportById(req, res) {
  try {
    const deletedReport = await ReportsModel.deleteReportById(req.params.id);
    if (!deletedReport) return res.status(404).json({ error: 'Relatório não encontrado' });
    res.json({ message: 'Relatório deletado com sucesso' });
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao deletar relatório' });
  }
}

module.exports = {
  getAllReports,
  getReportById,
  createReport,
  updateReportById,
  deleteReportById,
};
