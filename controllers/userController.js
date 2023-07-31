const userModel = require("../models/userModel");
const { v4: uuidv4 } = require("uuid");

const getAllUsers = (req, res) => {
  const users = userModel.getAllUsers();
  res.status(200).json(users.map((user) => ({ ...user, password: undefined })));
};

const getUserById = (req, res) => {
  const { id } = req.params;
  const user = userModel.getUserById(id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json({ ...user, password: undefined });
};

const createUser = (req, res) => {
  const { login, password } = req.body;
  const newUser = {
    id: uuidv4(),
    login,
    password,
    version: 1,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };

  userModel.createUser(newUser);

  res.status(201).json(newUser);
};

const updateUserPassword = (req, res) => {
  const { id } = req.params;
  const { oldPassword, newPassword } = req.body;

  const updatedUser = userModel.updateUserPassword(
    id,
    oldPassword,
    newPassword
  );

  if (!updatedUser) {
    return res.status(404).json({ error: "User not found" });
  }

  if (updatedUser === "wrongPassword") {
    return res.status(403).json({ error: "Incorrect old password" });
  }

  res.status(200).json({ ...updatedUser, password: undefined });
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  const deletedUser = userModel.deleteUser(id);

  if (!deletedUser) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(204).end();
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserPassword,
  deleteUser,
};
