const express = require("express");
const UserController = require("../controller/userController");
let userController = new UserController();

const loginRouter = express.Router();
loginRouter.use("/", userController.login);
module.exports = loginRouter;