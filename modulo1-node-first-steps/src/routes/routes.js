const userRouter = require('./user-router');
const storesRouter = require('./stores-router');

module.exports = [
  ...userRouter,
  ...storesRouter,
]