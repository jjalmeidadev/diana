const SubjectsModel = require('../models/subjectsModel');

async function getAllSubjects(req, res) {
  try {
    const subjects = await SubjectsModel.getAllSubjects();
    res.json(subjects);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar disciplinas' });
  }
}

async function getSubjectById(req, res) {
  try {
    const {id} = req.params
    const subject = await SubjectsModel.getSubjectById(id);
    if (!subject) return res.status(404).json({ error: 'Disciplina não encontrada' });
    res.json(subject);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar disciplina' });
  }
}

async function createSubject(req, res) {
  try {
    const { name_subject, teacher_id} = req.body;
    const newSubject = await SubjectsModel.createSubject(name_subject, teacher_id);
    res.status(201).json(newSubject);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar disciplina' });
  }
}

async function updateSubjectById(req, res) {
  try {
    const { name_subject, teacher_id} = req.body;
    const {id} = req.params;
    const updatedSubject = await SubjectsModel.updateSubjectById(name_subject, teacher_id, id);
    if (!updatedSubject) return res.status(404).json({ error: 'Matéria não encontrada' });
    res.json(updatedSubject);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao atualizar matéria' });
  }
}

async function deleteSubjectById(req, res) {
  try {
    const{id} = req.params;
    const deletedSubject = await SubjectsModel.deleteSubjectById(id);
    if (!deletedSubject) return res.status(404).json({ error: 'Matéria não encontrada' });
    res.json({ message: 'Matéria deletada com sucesso' });
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao deletar matéria' });
  }
}

module.exports = {
  getAllSubjects,
  getSubjectById,
  createSubject,
  updateSubjectById,
  deleteSubjectById,
};
