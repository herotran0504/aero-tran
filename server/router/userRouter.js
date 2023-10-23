const express = require("express");
const UserController = require("../controller/userController");
let userController = new UserController();

const userRouter = express.Router();
userRouter.use("/", userController.getUserInfo);
module.exports = userRouter;