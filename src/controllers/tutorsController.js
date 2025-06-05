const TutorsModel = require('../models/tutorsModel');

async function getAllTutors(req, res) {
  try {
    const tutors = await TutorsModel.getAllTutors();
    res.json(tutors);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar tutores' });
  }
}

async function getTutorById(req, res) {
  try {
    const tutor = await TutorsModel.getTutorById(req.params.id);
    if (!tutor) return res.status(404).json({ error: 'Tutor não encontrado' });
    res.json(tutor);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar tutor' });
  }
}

async function createTutor(req, res) {
  try {
    const newTutor = await TutorsModel.createTutor(req.body);
    res.status(201).json(newTutor);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar tutor' });
  }
}

async function updateTutorById(req, res) {
  try {
    const updatedTutor = await TutorsModel.updateTutorById(req.params.id, req.body);
    if (!updatedTutor) return res.status(404).json({ error: 'Tutor não encontrado' });
    res.json(updatedTutor);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao atualizar tutor' });
  }
}

async function deleteTutorById(req, res) {
  try {
    const deletedTutor = await TutorsModel.deleteTutorById(req.params.id);
    if (!deletedTutor) return res.status(404).json({ error: 'Tutor não encontrado' });
    res.json({ message: 'Tutor deletado com sucesso' });
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao deletar tutor' });
  }
}

module.exports = {
  getAllTutors,
  getTutorById,
  createTutor,
  updateTutorById,
  deleteTutorById,
};
