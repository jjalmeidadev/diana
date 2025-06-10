const TeachersModel = require('../models/teachersModel');

async function getAllTeachers(req, res) {
  try {
    const teachers = await TeachersModel.getAllTeachers();
    res.json(teachers);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar professores' });
  }
}

async function getTeacherById(req, res) {
  try {
    const teacher = await TeachersModel.getTeacherById(req.params.id);
    if (!teacher) return res.status(404).json({ error: 'Professor não encontrado' });
    res.json(teacher);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar professor' });
  }
}

async function createTeacher(req, res) {
  try {
    const {teacher_name, teacher_email} = req.body
    const newTeacher = await TeachersModel.createTeacher(teacher_name, teacher_email);
    res.status(201).json(newTeacher);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar professor' });
  }
}

async function updateTeacherById(req, res) {
  try {
    const {id} = req.params
    const {teacher_name, teacher_email} = req.body
    const updatedTeacher = await TeachersModel.updateTeacherById( id, teacher_name, teacher_email);
    if (!updatedTeacher) return res.status(404).json({ error: 'Professor não encontrado' });
    res.json(updatedTeacher);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao atualizar professor' });
  }
}

async function deleteTeacherById(req, res) {
  try {
    const deletedTeacher = await TeachersModel.deleteTeacherById(req.params.id);
    if (!deletedTeacher) return res.status(404).json({ error: 'Professor não encontrado' });
    res.json({ message: 'Professor deletado com sucesso' });
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao deletar professor' });
  }
}

module.exports = {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacherById,
  deleteTeacherById,
};
