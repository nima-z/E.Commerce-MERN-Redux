//libraries
const express = require("express");
//modules
const {
  getAllUsers,
  getUser,
  getAllStats,
  editUser,
  deleteUser,
} = require("../Controllers/users-controller");
const {
  verifyTokenAndId,
  verifyTokenAndAdmin,
} = require("../Helper/verifyTokenAndId");
//-----------------------------------------------------------

const router = express.Router();

//routes
router.patch("/:userId", verifyTokenAndId, editUser);
router.delete("/:userId", verifyTokenAndId, deleteUser);
router.get("/stats", verifyTokenAndAdmin, getAllStats);
router.get("/", verifyTokenAndAdmin, getAllUsers);
router.get("/:userId", verifyTokenAndAdmin, getUser);

//========================
module.exports = router;
