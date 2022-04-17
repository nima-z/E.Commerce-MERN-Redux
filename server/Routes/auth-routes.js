//libraries
const express = require("express");
//modules
const { register, login } = require("../Controllers/auth-controller");
//-------------------------------

const router = express.Router();

//routes
router.post("/register", register);
router.post("/login", login);

//=========================
module.exports = router;
