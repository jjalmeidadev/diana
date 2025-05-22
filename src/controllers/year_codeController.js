const YearCodeModel = require('../models/year_code.model');

async function getAllYearCodes(req, res) {
  try {
    const codes = await YearCodeModel.getAllYearCodes();
    res.json(codes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar códigos' });
  }
}

async function getYearCodeById(req, res) {
  try {
    const code = await YearCodeModel.getYearCodeById(req.params.id);
    if (!code) return res.status(404).json({ error: 'Código não encontrado' });
    res.json(code);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar código' });
  }
}

async function createYearCode(req, res) {
  try {
    const newCode = await YearCodeModel.createYearCode(req.body);
    res.status(201).json(newCode);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar código' });
  }
}

module.exports = {
  getAllYearCodes,
  getYearCodeById,
  createYearCode,
};
