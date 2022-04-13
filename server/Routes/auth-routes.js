const express = require("express");
const authController = require("../Controllers/auth-controller");

const router = express.Router();

router.post("/register", authController.register);

router.get("/login", (req, res) => {
  res.send("loged in");
});

module.exports = router;
