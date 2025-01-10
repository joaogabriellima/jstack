const UserController = require("../controllers/user-controller");

const userRouter = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers,
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: UserController.listUsers,
  },
  {
    endpoint: '/users',
    method: 'POST',
    handler: UserController.addUser,
  }
];

module.exports = userRouter;