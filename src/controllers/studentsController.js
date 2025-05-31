const StudentsModel = require('../models/studentsModel');

async function getAllStudents(req, res) {
  try {
    const students = await StudentsModel.getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar estudantes' });
  }
}

async function getStudentById(req, res) {
  try {
    const student = await StudentsModel.getStudentById(req.params.id);
    if (!student) return res.status(404).json({ error: 'Estudante não encontrado' });
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar estudante' });
  }
}

async function createStudent(req, res) {
  try {
    const newStudent = await StudentsModel.createStudent(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar estudante' });
  }
}

async function updateStudentById(req, res) {
  try {
    const updatedStudent = await StudentsModel.updateStudentById(req.params.id, req.body);
    if (!updatedStudent) return res.status(404).json({ error: 'Aluno não encontrado' });
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar aluno' });
  }
}

async function deleteStudentById(req, res) {
  try {
    const deletedStudent = await StudentsModel.deleteStudentById(req.params.id);
    if (!deletedStudent) return res.status(404).json({ error: 'Aluno não encontrado' });
    res.json({ message: 'Aluno deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar aluno' });
  }
}

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  deleteStudentById,
};
