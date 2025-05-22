const TeacherModel = require('../models/teachers.model');

async function getAllTeachers(req, res) {
  try {
    const teachers = await TeacherModel.getAllTeachers();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar professores' });
  }
}

async function getTeacherById(req, res) {
  try {
    const teacher = await TeacherModel.getTeacherById(req.params.id);
    if (!teacher) return res.status(404).json({ error: 'Professor não encontrado' });
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar professor' });
  }
}

async function createTeacher(req, res) {
  try {
    const newTeacher = await TeacherModel.createTeacher(req.body);
    res.status(201).json(newTeacher);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar professor' });
  }
}

module.exports = {
  getAllTeachers,
  getTeacherById,
  createTeacher,
};
