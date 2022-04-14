const express = require("express");
const usersController = require("../Controllers/users-controller");
const { verifyId } = require("../Helper/verifyTokenAndId");

const router = express.Router();

router.patch("/:id", verifyId, usersController.editUser);

module.exports = router;
