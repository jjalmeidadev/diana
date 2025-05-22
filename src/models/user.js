const pool = require('../config/db');

async function getAllUsers() {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
}

async function getUserById(id) {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
}

async function createUser({ email, password, type_of_user }) {
  const result = await pool.query(
    'INSERT INTO users (email, password, type_of_user) VALUES ($1, $2, $3) RETURNING *',
    [email, password, type_of_user]
  );
  return result.rows[0];
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
