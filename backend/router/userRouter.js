const express = require("express");
const Controller = require("../controller/userController");
let controller = Controller.create();

const router = express.Router();

// get all students
router.get("/", controller.login);

module.exports = router;