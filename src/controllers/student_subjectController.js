const StudentSubjectModel = require('../models/student_subjectModel');

async function getAllStudentSubjects(req, res) {
  try {
    const studentSubjects = await StudentSubjectModel.getAllStudentSubjects();
    res.json(studentSubjects);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar relações aluno-disciplina' });
  }
}

async function getStudentSubjectById(req, res) {
  try {
    const studentSubject = await StudentSubjectModel.getStudentSubjectById(req.params.id);
    if (!studentSubject) return res.status(404).json({ error: 'Relação aluno-disciplina não encontrada' });
    res.json(studentSubject);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar relação aluno-disciplina' });
  }
}

async function createStudentSubject(req, res) {
  try {
    const newStudentSubject = await StudentSubjectModel.createStudentSubject(req.body);
    res.status(201).json(newStudentSubject);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar relação aluno-disciplina' });
  }
}

async function updateStudentSubjectById(req, res) {
  try {
    const updatedStudentSubject = await StudentSubjectModel.updateStudentSubjectById(req.params.id, req.body);
    if (!updatedStudentSubject) return res.status(404).json({ error: 'Relação aluno-matéria não encontrada' });
    res.json(updatedStudentSubject);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao atualizar relação aluno-matéria' });
  }
}

async function deleteStudentSubjectById(req, res) {
  try {
    const deletedStudentSubject = await StudentSubjectModel.deleteStudentSubjectById(req.params.id);
    if (!deletedStudentSubject) return res.status(404).json({ error: 'Relação aluno-matéria não encontrada' });
    res.json({ message: 'Relação aluno-matéria deletada com sucesso' });
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao deletar relação aluno-matéria' });
  }
}

module.exports = {
  getAllStudentSubjects,
  getStudentSubjectById,
  createStudentSubject,
  updateStudentSubjectById,
  deleteStudentSubjectById,
};
