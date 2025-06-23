const StudentsModel = require('../models/studentsModel');

async function getAllStudents(req, res) {
  try {
    const students = await StudentsModel.getAllStudents();
    res.render('students', { students }); // Renders students.ejs
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar estudantes');
  }
}

async function getStudentById(req, res) {
  try {
    const {id} = req.params
    const student = await StudentsModel.getStudentById(id);
    if (!student) {
      return res.status(404).send('Estudante não encontrado');
    }

    return res.render('choose', { student }); // Renders student.ejs
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar estudante');
  }
}

async function createStudent(req, res) {
  try {
    const newStudent = await StudentsModel.createStudent(req.body);
    res.redirect(`/students/${newStudent.id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao criar estudante');
  }
}

async function updateStudentById(req, res) {
  try {
    const updatedStudent = await StudentsModel.updateStudentById(req.params.id, req.body);
    if (!updatedStudent) return res.status(404).send('Aluno não encontrado');
    res.redirect(`/students/${updatedStudent.id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao atualizar aluno');
  }
}

async function deleteStudentById(req, res) {
  try {
    const deletedStudent = await StudentsModel.deleteStudentById(req.params.id);
    if (!deletedStudent) return res.status(404).send('Aluno não encontrado');
    res.redirect('/students');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao deletar aluno');
  }
}

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  deleteStudentById
};
