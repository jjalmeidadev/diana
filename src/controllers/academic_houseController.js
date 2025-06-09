const AcademicHouseModel = require('../models/academicHouseModel');

async function getAllAcademicHouses(req, res) {
  try {
    const houses = await AcademicHouseModel.getAllAcademicHouses();
    res.json(houses);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar casas acadêmicas' });
  }
}

async function getAcademicHouseById(req, res) {
  try {
    const house = await AcademicHouseModel.getAcademicHouseById(req.params.id);
    if (!house) return res.status(404).json({ error: 'Casa acadêmica não encontrada' });
    res.json(house);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar casa acadêmica' });
  }
}

async function createAcademicHouse(req, res) {
  try {
    const newHouse = await AcademicHouseModel.createAcademicHouse(req.body);
    res.status(201).json(newHouse);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar casa acadêmica' });
  }
}

async function updateAcademicHouseById(req, res) {
  try {
    const updatedHouse = await AcademicHouseModel.updateAcademicHouseById(req.params.id, req.body);
    if (!updatedHouse) return res.status(404).json({ error: 'Casa acadêmica não encontrada' });
    res.json(updatedHouse);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao atualizar casa acadêmica' });
  }
}

async function deleteAcademicHouseById(req, res) {
  try {
    const deletedHouse = await AcademicHouseModel.deleteAcademicHouseById(req.params.id);
    if (!deletedHouse) return res.status(404).json({ error: 'Casa acadêmica não encontrada' });
    res.json({ message: 'Casa acadêmica deletada com sucesso' });
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao deletar casa acadêmica' });
  }
}

async function patchAcademicHouse(req, res) {
  try {
    const patchedHouse = await AcademicHouseModel.patchAcademicHouse(req.params.id, req.body);
    if (!patchedHouse) return res.status(404).json({ error: 'Casa acadêmica não encontrada' });
    res.json(patchedHouse);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar parcialmente a casa acadêmica' });
  }
}

module.exports = {
  getAllAcademicHouses,
  getAcademicHouseById,
  createAcademicHouse,
  updateAcademicHouseById,
  deleteAcademicHouseById,
  patchAcademicHouse,
};
