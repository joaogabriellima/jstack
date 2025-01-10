const users = require('../mocks/users');

const UserController = {
  listUsers: (request, response) => {
    const filteredUsers = filterUsers(request.query);
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify(filteredUsers));
  },

  getUserById: (request, response) => {
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify(filteredUsers));
  },

  addUser: (request, response) => {
    console.log('not implemented yet');
  }
};

const filterUsers = (query) => {
  console.log("🚀 ~ filterUsers ~ query:", query)
  if (!query || Object.keys(query).length == 0) return users;

  const { name } = query;

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(name));
  console.log("🚀 ~ filterUsers ~ filteredUsers:", filteredUsers)

  return filteredUsers;
}

module.exports = UserController;