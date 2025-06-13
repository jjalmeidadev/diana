const pool = require('../config/db');

async function getAllTutors() {
  const result = await pool.query('SELECT * FROM tutors');
  return result.rows;
}

async function getTutorById(id) {
  const result = await pool.query('SELECT * FROM tutors WHERE id = $1', [id]);
  return result.rows[0];
}

async function createTutor({ name_tutor, email }) {
  const result = await pool.query(
    'INSERT INTO tutors (name_tutor, email) VALUES ($1, $2) RETURNING *',
    [name_tutor, email]
  );
  return result.rows[0];
}

async function updateTutorById(id, tutorData) {
  const { nome_tutor, email } = tutorData;
  const result = await pool.query(
    'UPDATE tutors SET nome_tutor = $1, email = $2 WHERE id = $3 RETURNING *',
    [nome_tutor, email, id]
  );
  return result.rows[0];
}

async function deleteTutorById(id) {
  const result = await pool.query(
    'DELETE FROM tutors WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0];
}

module.exports = {
  getAllTutors,
  getTutorById,
  createTutor,
  updateTutorById,
  deleteTutorById,
};
