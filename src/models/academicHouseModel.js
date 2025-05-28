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

async function updateAcademicHouseById(id, academicHouseData) {
  const { house } = academicHouseData;
  const result = await pool.query(
    'UPDATE academic_house SET house = $1 WHERE id = $2 RETURNING *',
    [house, id]
  );
  return result.rows[0];
}

async function deleteAcademicHouseById(id) {
  const result = await pool.query(
    'DELETE FROM academic_house WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0];
}

module.exports = {
  getAllAcademicHouses,
  getAcademicHouseById,
  createAcademicHouse,
  updateAcademicHouseById,
  deleteAcademicHouseById,
};
