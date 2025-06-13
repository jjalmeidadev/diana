const YearCodeModel = require('../models/yearCodeModel');

async function getAllYearCodes(req, res) {
  try {
    const codes = await YearCodeModel.getAllYearCodes();
    res.json(codes);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar códigos' });
  }
}

async function getYearCodeById(req, res) {
  try {
    const {id} = req.params;
    const code = await YearCodeModel.getYearCodeById(id);
    if (!code) return res.status(404).json({ error: 'Código não encontrado' });
    res.json(code);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar código' });
  }
}

async function createYearCode(req, res) {
  try {
      const {year_code} = req.body;
    const newCode = await YearCodeModel.createYearCode(year_code);
    res.status(201).json(newCode);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar código' });
  }
}

async function updateYearCodeById(req, res) {
  try {
    const { year_code } = req.body;
    const updatedYearCode = await YearCodeModel.updateYearCodeById(year_code);

    if (!updatedYearCode) return res.status(404).json({ error: 'Código do ano não encontrado' });
    res.json(updatedYearCode);

  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao atualizar código do ano' });
  }
}

async function deleteYearCodeById(req, res) {
  try {
    const {id} = req.params;
    const deletedYearCode = await YearCodeModel.deleteYearCodeById(id);
    if (!deletedYearCode) return res.status(404).json({ error: 'Código do ano não encontrado' });
    res.json({ message: 'Código do ano deletado com sucesso' });
  } catch (error) {
    console.error(error)
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
