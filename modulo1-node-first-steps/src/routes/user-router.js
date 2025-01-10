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
    handler: UserController.getUserById,
  },
];

module.exports = userRouter;