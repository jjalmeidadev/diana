const pool = require('../config/db');

async function getAllTeachers() {
  const result = await pool.query('SELECT * FROM teachers');
  return result.rows;
}

async function getTeacherById(id) {
  const result = await pool.query('SELECT * FROM teachers WHERE id = $1', [id]);
  return result.rows[0];
}

async function createTeacher({ teachers_name, teachers_email }) {
  const result = await pool.query(
    'INSERT INTO teachers (teachers_name, teachers_email) VALUES ($1, $2) RETURNING *',
    [teachers_name, teachers_email]
  );
  return result.rows[0];
}

async function updateTeacherById(id, teacherData) {
  const { teachers_name, teachers_email } = teacherData;
  const result = await pool.query(
    'UPDATE teachers SET teachers_name = $1, teachers_email = $2 WHERE id = $3 RETURNING *',
    [teachers_name, teachers_email, id]
  );
  return result.rows[0];
}

async function patchTeacher(id, partialData) {
  const updatedTeacher = await pool.query(
    'UPDATE teachers SET field1 = $1, field2 = $2 WHERE id = $3 RETURNING *',
    [partialData.field1, partialData.field2, id]
  );
  return updatedTeacher.rows[0];
}

async function deleteTeacherById(id) {
  const result = await pool.query(
    'DELETE FROM teachers WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0];
}

module.exports = {
  getAllTeachers,
  getTeacherById,
  createTeacher,
  updateTeacherById,
  patchTeacher,
  deleteTeacherById,
};
