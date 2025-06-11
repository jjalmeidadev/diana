const StudentsModel = require('../models/studentsModel');

async function getAllStudents(req, res) {
  try {
    const students = await StudentsModel.getAllStudents();
    res.json(students);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar estudantes' });
  }
}

async function getStudentById(req, res) {
  try {
    const {id} = req.params
    const student = await StudentsModel.getStudentById(id);
    if (!student) return res.status(404).json({ error: 'Estudante não encontrado' });
    res.json(student);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar estudante' });
  }
}

async function createStudent(req, res) {
  try {
    const {
    student_name,
    date_birth,
    parent_id,
    address,
    num_absences,
    tutor_id,
    registration,
    student_surname,
    student_fullname,
    gender,
    school_age,
    school_id,
    primary_contact,
    post_code,
    medical_flags,
    academic_house_id,
    year_code_id
    } = req.body;

    const newStudent = await StudentsModel.createStudent(
    student_name,
    date_birth,
    parent_id,
    address,
    num_absences,
    tutor_id,
    registration,
    student_surname,
    student_fullname,
    gender,
    school_age,
    school_id,
    primary_contact,
    post_code,
    medical_flags,
    academic_house_id,
    year_code_id
    );
    return res.status(201).json(newStudent);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar estudante' });
  }
}

async function updateStudentById(req, res) {
  try {
    const {id} = req.params
    const {
    student_name,
    date_birth,
    parent_id,
    address,
    num_absences,
    tutor_id,
    registration,
    student_surname,
    student_fullname,
    gender,
    school_age,
    school_id,
    primary_contact,
    post_code,
    medical_flags,
    academic_house_id,
    year_code_id}= req.body

    const updatedStudent = await StudentsModel.updateStudentById(
    id,
    student_name,
    date_birth,
    parent_id,
    address,
    num_absences,
    tutor_id,
    registration,
    student_surname,
    student_fullname,
    gender,
    school_age,
    school_id,
    primary_contact,
    post_code,
    medical_flags,
    academic_house_id,
    year_code_id);
    if (!updatedStudent) return res.status(404).json({ error: 'Aluno não encontrado' });
    res.json(updatedStudent);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao atualizar aluno' });
  }
}

async function deleteStudentById(req, res) {
  try {
    const {id} = req.params;
    const deletedStudent = await StudentsModel.deleteStudentById(id);
    if (!deletedStudent) return res.status(404).json({ error: 'Aluno não encontrado' });
    res.json({ message: 'Aluno deletado com sucesso' });
  } catch (error) {
    console.error(error)
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
