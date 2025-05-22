const TutorModel = require('../models/tutors.model');

async function getAllTutors(req, res) {
  try {
    const tutors = await TutorModel.getAllTutors();
    res.json(tutors);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tutores' });
  }
}

async function getTutorById(req, res) {
  try {
    const tutor = await TutorModel.getTutorById(req.params.id);
    if (!tutor) return res.status(404).json({ error: 'Tutor não encontrado' });
    res.json(tutor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tutor' });
  }
}

async function createTutor(req, res) {
  try {
    const newTutor = await TutorModel.createTutor(req.body);
    res.status(201).json(newTutor);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tutor' });
  }
}

module.exports = {
  getAllTutors,
  getTutorById,
  createTutor,
};
