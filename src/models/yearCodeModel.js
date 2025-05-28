const pool = require('../config/db');

async function getAllYearCodes() {
  const result = await pool.query('SELECT * FROM year_code');
  return result.rows;
}

async function getYearCodeById(id) {
  const result = await pool.query('SELECT * FROM year_code WHERE id = $1', [id]);
  return result.rows[0];
}

async function createYearCode({ year_code }) {
  const result = await pool.query(
    'INSERT INTO year_code (year_code) VALUES ($1) RETURNING *',
    [year_code]
  );
  return result.rows[0];
}

async function updateYearCodeById(id, yearCodeData) {
  const { year_code } = yearCodeData;
  const result = await pool.query(
    'UPDATE year_code SET year_code = $1 WHERE id = $2 RETURNING *',
    [year_code, id]
  );
  return result.rows[0];
}

async function deleteYearCodeById(id) {
  const result = await pool.query(
    'DELETE FROM year_code WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0];
}

module.exports = {
  getAllYearCodes,
  getYearCodeById,
  createYearCode,
  updateYearCodeById,
  deleteYearCodeById,
};
