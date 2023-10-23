const express = require("express");
const UserController = require("../controller/userController");
let userController = new UserController();

const registerRouter = express.Router();
registerRouter.use("/", userController.register);
module.exports = registerRouter;