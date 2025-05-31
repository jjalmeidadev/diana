const YearCodeModel = require('../models/yearCodeModel');

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

async function updateYearCodeById(req, res) {
  try {
    const updatedYearCode = await YearCodeModel.updateYearCodeById(req.params.id, req.body);
    if (!updatedYearCode) return res.status(404).json({ error: 'Código do ano não encontrado' });
    res.json(updatedYearCode);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar código do ano' });
  }
}

async function deleteYearCodeById(req, res) {
  try {
    const deletedYearCode = await YearCodeModel.deleteYearCodeById(req.params.id);
    if (!deletedYearCode) return res.status(404).json({ error: 'Código do ano não encontrado' });
    res.json({ message: 'Código do ano deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar código do ano' });
  }
}

module.exports = {
  getAllYearCodes,
  getYearCodeById,
  createYearCode,
  updateYearCodeById,
  deleteYearCodeById,
};
