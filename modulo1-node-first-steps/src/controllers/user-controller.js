const users = require('../mocks/users');

const UserController = {
  listUsers: (request, response) => {
    const filteredUsers = filterUsers(request.query);
    response.send(200, filteredUsers);
  },

  getUserById: (request, response) => {
    const { id } = request.params;

    const foundUser = filterUserById(id);

    if (!foundUser) { 
      response.send(404, { error: 'User not found' })
      return;
    }

    response.send(200, filterUserById(id));
  },

  createUser: (request, response) => {
    const { name, email } = request.body;

    if (!name || !email) {
      response.send(400, { error: 'Name and email are required' });
      return;
    }

    const newUser = {
      id: users.length + 1,
      name,
      email
    };

    users.push(newUser);

    response.send(201, newUser);
  },

  updateUser: (request, response) => {
    const { id } = request.params;
    const { name, email } = request.body;

    if (!name || !email) {
      response.send(400, { error: 'Name and email are required' });
      return;
    }

    const updatedUser = {
      id: Number(id),
      name, 
      email
    };

    const userIndex = users.findIndex((user) => user.id == id);

    if (userIndex == -1) {
      response.send(404, { error: 'User not found' });
      return;
    }

    users[userIndex] = updatedUser;

    response.send(200, updatedUser);
  },

  deleteUser: (request, response) => {
    const { id } = request.params;

    const userIndex = users.findIndex((user) => user.id == id);

    if (userIndex == -1) {
      response.send(404, { error: 'User not found' });
      return;
    }

    users.splice(userIndex, 1);

    response.send(201, { message: 'User deleted successfully' });
  }
};

const filterUsers = (query) => {
  if (!query || Object.keys(query).length == 0) return users;

  const { name } = query;

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(name));

  return filteredUsers;
}

const filterUserById = (id) => {
  return users.find((user) => user.id == id);
}

module.exports = UserController;