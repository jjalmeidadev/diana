const StudentSubjectModel = require('../models/student_subjectModel');

async function getAllStudentSubjects(req, res) {
  try {
    const studentSubjects = await StudentSubjectModel.getAllStudentSubjects();
    res.json(studentSubjects);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar relações aluno-disciplina' });
  }
}

async function getStudentSubjectById(req, res) {
  try {
    const studentSubject = await StudentSubjectModel.getStudentSubjectById(req.params.id);
    if (!studentSubject) return res.status(404).json({ error: 'Relação aluno-disciplina não encontrada' });
    res.json(studentSubject);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar relação aluno-disciplina' });
  }
}

async function createStudentSubject(req, res) {
  try {
    const newStudentSubject = await StudentSubjectModel.createStudentSubject(req.body);
    res.status(201).json(newStudentSubject);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar relação aluno-disciplina' });
  }
}

module.exports = {
  getAllStudentSubjects,
  getStudentSubjectById,
  createStudentSubject,
};
