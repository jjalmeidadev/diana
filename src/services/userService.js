// services/userService.js

const User = require('../models/userModel'); // ou o caminho correto do seu model

const getAllUsers = async () => {
  return await User.getAll();
};

const getUserById = async (id) => {
  return await User.getById(id);
};

const createUser = async (name, email) => {
  return await User.create({ name, email });
};

const updateUser = async (id, name, email) => {
  return await User.update(id, { name, email });
};

const deleteUser = async (id) => {
  const deleted = await User.delete(id);
  return deleted ? { message: 'Usuário deletado com sucesso' } : null;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
