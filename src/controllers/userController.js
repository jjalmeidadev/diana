const UserModel = require('../models/userModel');

async function getAllUsers(req, res) {
  try {
    const users = await UserModel.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
}

async function getUserById(req, res) {
  try {
    const user = await UserModel.getUserById(req.params.id);
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(user);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
}

async function createUser(req, res) {
  try {
    const newUser = await UserModel.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
}

async function updateUserById(req, res) {
  try {
    const updatedUser = await UserModel.updateUserById(req.params.id, req.body);
    if (!updatedUser) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(updatedUser);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
}

async function deleteUserById(req, res) {
  try {
    const deletedUser = await UserModel.deleteUserById(req.params.id);
    if (!deletedUser) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json({ message: 'Usuário deletado com sucesso' });
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
}

async function patchUser(req, res) {
  try {
    const patchedUser = await UserModel.patchUser(req.params.id, req.body);
    if (!patchedUser) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(patchedUser);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar parcialmente o usuário' });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  patchUser,
};
