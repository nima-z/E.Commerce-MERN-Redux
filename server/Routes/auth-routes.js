//libraries
const express = require("express");
//modules
const authController = require("../Controllers/auth-controller");
//-------------------------------

const router = express.Router();

//routes
router.post("/register", authController.register);
router.post("/login", authController.login);

//=========================
module.exports = router;
