const pool = require('../config/db');

async function getAllTeachers() {
  const result = await pool.query('SELECT * FROM teachers');
  return result.rows;
}

async function getTeacherById(id) {
  const result = await pool.query('SELECT * FROM teachers WHERE id = $1', [id]);
  return result.rows[0];
}

async function createTeacher( teacher_name, teacher_email ) {
  const result = await pool.query(
    'INSERT INTO teachers (teacher_name, teacher_email) VALUES ($1, $2) RETURNING *',
    [teacher_name, teacher_email]
  );
  return result.rows[0];
}

async function updateTeacherById(id, teacher_name, teacher_email) {
  const result = await pool.query(
    'UPDATE teachers SET teacher_name = $1, teacher_email = $2 WHERE id = $3 RETURNING *',
    [teacher_name, teacher_email, id]
  );
  return result.rows[0];
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
  deleteTeacherById,
};
