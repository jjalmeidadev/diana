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

module.exports = {
  getAllTeachers,
  getTeacherById,
  createTeacher,
};
