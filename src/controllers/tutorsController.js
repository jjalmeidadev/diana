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
    const {id} = req.params;
    const tutor = await TutorsModel.getTutorById(id);
    if (!tutor) return res.status(404).json({ error: 'Tutor não encontrado' });
    res.json(tutor);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar tutor' });
  }
}

async function createTutor(req, res) {
  try {
    const {id} = req.params
    const {email, name_tutor} = req.body;
    const newTutor = await TutorsModel.createTutor(id, email, name_tutor);
    res.status(201).json(newTutor);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar tutor' });
  }
}

async function updateTutorById(req, res) {
  try {
    const {id} = req.params;
    const {email} = req.body;
    const updatedTutor = await TutorsModel.updateTutorById(id, email);
    if (!updatedTutor) return res.status(404).json({ error: 'Tutor não encontrado' });
    res.json(updatedTutor);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao atualizar tutor' });
  }
}

async function deleteTutorById(req, res) {
  try {
    const {id} = req.params;
    const deletedTutor = await TutorsModel.deleteTutorById(id);
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
