//libraries
const express = require("express");
//modules
const usersController = require("../Controllers/users-controller");
const { verifyId } = require("../Helper/verifyTokenAndId");
//-----------------------------------------------------------

const router = express.Router();

//routes
router.patch("/:id", verifyId, usersController.editUser);

//========================
module.exports = router;
