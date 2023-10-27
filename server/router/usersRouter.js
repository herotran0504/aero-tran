const express = require("express");
const UserController = require("../controller/userController");
let controller = new UserController();

const router = express.Router();
router.get("/", controller.getUserInfo);
router.put("/", controller.updateUserInfo);
module.exports = router;