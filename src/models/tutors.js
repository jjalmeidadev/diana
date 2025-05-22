const pool = require('../config/db');

async function getAllTutors() {
  const result = await pool.query('SELECT * FROM tutors');
  return result.rows;
}

async function getTutorById(id) {
  const result = await pool.query('SELECT * FROM tutors WHERE id = $1', [id]);
  return result.rows[0];
}

async function createTutor({ nome_tutor, email }) {
  const result = await pool.query(
    'INSERT INTO tutors (nome_tutor, email) VALUES ($1, $2) RETURNING *',
    [nome_tutor, email]
  );
  return result.rows[0];
}

module.exports = {
  getAllTutors,
  getTutorById,
  createTutor,
};
