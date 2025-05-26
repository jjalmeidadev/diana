const SubjectsModel = require('../models/subjectsModel');

async function getAllSubjects(req, res) {
  try {
    const subjects = await SubjectsModel.getAllSubjects();
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar disciplinas' });
  }
}

async function getSubjectById(req, res) {
  try {
    const subject = await SubjectsModel.getSubjectById(req.params.id);
    if (!subject) return res.status(404).json({ error: 'Disciplina não encontrada' });
    res.json(subject);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar disciplina' });
  }
}

async function createSubject(req, res) {
  try {
    const newSubject = await SubjectsModel.createSubject(req.body);
    res.status(201).json(newSubject);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar disciplina' });
  }
}

module.exports = {
  getAllSubjects,
  getSubjectById,
  createSubject,
};
