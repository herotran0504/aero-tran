const express = require("express");
const UserController = require("../controller/userController");
let userController = new UserController();

const router = express.Router();

// get all students
router.get("/", userController.getAllUsers);

module.exports = router;