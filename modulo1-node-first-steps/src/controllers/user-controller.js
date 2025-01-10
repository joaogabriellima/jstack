const users = require('../mocks/users');

const UserController = {
  listUsers: (request, response) => {
    const filteredUsers = filterUsers(request.query);
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify(filteredUsers));
  },

  getUserById: (request, response) => {
    const { id } = request.params;

    const foundUser = filterUserById(id);

    if (!foundUser) { 
      response.writeHead(404, { 'content-type': 'application/json' });
      response.end(JSON.stringify({ message: 'User not found' }));
      return;
    }

    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify(filterUserById(id)));
  },
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