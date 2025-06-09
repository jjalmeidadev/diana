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

async function updateTutorById(id, tutorData) {
  const { nome_tutor, email } = tutorData;
  const result = await pool.query(
    'UPDATE tutors SET nome_tutor = $1, email = $2 WHERE id = $3 RETURNING *',
    [nome_tutor, email, id]
  );
  return result.rows[0];
}

async function patchTutor(id, partialData) {
  const updatedTutor = await pool.query(
    'UPDATE tutors SET field1 = $1, field2 = $2 WHERE id = $3 RETURNING *',
    [partialData.field1, partialData.field2, id]
  );
  return updatedTutor.rows[0];
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
  patchTutor,
};
