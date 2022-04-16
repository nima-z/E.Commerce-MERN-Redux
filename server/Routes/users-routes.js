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
router.patch("/:userId", verifyTokenAndId, usersController.editUser);
router.delete("/:userId", verifyTokenAndId, usersController.deleteUser);
router.get("/stats", verifyTokenAndAdmin, usersController.getAllStats);
router.get("/", verifyTokenAndAdmin, usersController.getAllUsers);
router.get("/:userId", verifyTokenAndAdmin, usersController.getUser);

//========================
module.exports = router;
