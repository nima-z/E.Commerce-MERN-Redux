//libraries
const express = require("express");
//modules
const usersController = require("../Controllers/users-controller");
const {
  verifyTokenAndId,
  verifyTokenAndAdmin,
} = require("../Helper/verifyTokenAndId");
//-----------------------------------------------------------

const router = express.Router();

//routes
router.patch("/:id", verifyTokenAndId, usersController.editUser);
router.delete("/:id", verifyTokenAndId, usersController.deleteUser);
router.get("/:id", verifyTokenAndAdmin, usersController.getUser);
router.get("/", verifyTokenAndAdmin, usersController.getAllUser);

//========================
module.exports = router;
