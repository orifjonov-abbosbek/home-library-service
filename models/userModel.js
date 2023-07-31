const users = [
  {
    id: "1",
    login: "user1",
    password: "password1",
    version: 1,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: "2",
    login: "user2",
    password: "password2",
    version: 1,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: "3",
    login: "user3",
    password: "password3",
    version: 1,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
];

const getAllUsers = () => {
  return users;
};

const getUserById = (id) => {
  return users.find((user) => user.id === id);
};

const createUser = (user) => {
  users.push(user);
};

const updateUserPassword = (id, oldPassword, newPassword) => {
  const user = users.find((user) => user.id === id);

  if (!user) {
    return null;
  }

  if (user.password !== oldPassword) {
    return "wrongPassword";
  }

  user.password = newPassword;
  user.version += 1;
  user.updatedAt = Date.now();

  return user;
};

const deleteUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    return true;
  }
  return false;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserPassword,
  deleteUser,
};
