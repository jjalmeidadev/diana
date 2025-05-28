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

async function updateUserById(id, userData) {
  const { email, password, type_of_user } = userData;
  const result = await pool.query(
    'UPDATE users SET email = $1, password = $2, type_of_user = $3 WHERE id = $4 RETURNING *',
    [email, password, type_of_user, id]
  );
  return result.rows[0];
}

async function deleteUserById(id) {
  const result = await pool.query(
    'DELETE FROM users WHERE id = $1 RETURNING *',
    [id]
  );
  return result.rows[0];
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
