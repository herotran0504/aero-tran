const express = require("express");
const UserController = require("../controller/userController");
let userController = new UserController();

const usersRouter = express.Router();
usersRouter.use("/", userController.getAllUsers);
module.exports = usersRouter;