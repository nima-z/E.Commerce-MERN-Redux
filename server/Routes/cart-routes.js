//libraries
const express = require("express");
//modules
const {
  verifyToken,
  verifyTokenAndId,
  verifyTokenAndAdmin,
} = require("../Helper/verifyTokenAndId");
const {
  getAllCarts,
  getCart,
  createCart,
  updateCart,
  deleteCart,
} = require("../Controllers/cart-controller");
//--------------------------------

const router = express.Router();

//routes
router.get("/", verifyTokenAndAdmin, getAllCarts);
router.get("/find/:userId", verifyTokenAndId, getCart);
router.post("/", verifyToken, createCart);
router.patch("/:cartId", verifyTokenAndId, updateCart);
router.delete("/:cartId", verifyTokenAndId, deleteCart);

//========================
module.exports = router;
