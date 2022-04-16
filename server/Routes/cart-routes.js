//libraries
const express = require("express");
//modules
const {
  verifyToken,
  verifyTokenAndId,
  verifyTokenAndAdmin,
} = require("../Helper/verifyTokenAndId");
const cartController = require("../Controllers/cart-controller");
//--------------------------------

const router = express.Router();

//routes
router.get("/", verifyTokenAndAdmin, cartController.getAllCart);
router.get("/find/:userId", verifyTokenAndId, cartController.getCart);
router.post("/", verifyToken, cartController.createCart);
router.patch("/:cartId", verifyTokenAndId, cartController.updateCart);
router.delete("/:cartId", verifyTokenAndId, cartController.deleteCart);

//========================
module.exports = router;
