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

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
};
