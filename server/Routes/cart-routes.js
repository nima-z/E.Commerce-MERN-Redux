//libraries
const express = require("express");
//modules
const {
  verifyToken,
  verifyTokenAndId,
  verifyTokenAndAdmin,
} = require("../Helper/verifyTokenAndId");
const { createCart, getAllCarts } = require("../Controllers/cart-controller");
//--------------------------------

const router = express.Router();

//routes
router.post("/:userId", verifyTokenAndId, createCart);
router.get("/", verifyTokenAndAdmin, getAllCarts);
// router.get("/find/:userId", verifyTokenAndId, getCart);
// router.patch("/:cartId", verifyTokenAndId, updateCart);
// router.delete("/:cartId", verifyTokenAndId, deleteCart);

//========================
module.exports = router;
