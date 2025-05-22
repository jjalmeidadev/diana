const pool = require('../config/db');

async function getAllAcademicHouses() {
  const result = await pool.query('SELECT * FROM academic_house');
  return result.rows;
}

async function getAcademicHouseById(id) {
  const result = await pool.query('SELECT * FROM academic_house WHERE id = $1', [id]);
  return result.rows[0];
}

async function createAcademicHouse({ house }) {
  const result = await pool.query(
    'INSERT INTO academic_house (house) VALUES ($1) RETURNING *',
    [house]
  );
  return result.rows[0];
}

module.exports = {
  getAllAcademicHouses,
  getAcademicHouseById,
  createAcademicHouse,
};
