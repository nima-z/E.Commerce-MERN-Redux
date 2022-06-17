//libraries
const express = require("express");
//modules
const {
  verifyToken,
  verifyTokenAndId,
  verifyTokenAndAdmin,
} = require("../Helper/verifyTokenAndId");
const {
  getAllOrders,
  getOrder,
  getMonthlyIncome,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../Controllers/order-controller");
//--------------------------------

const router = express.Router();

//routes
router.get("/", verifyTokenAndAdmin, getAllOrders);
router.get("/find/:userId", verifyTokenAndId, getOrder);
router.get("/income", verifyTokenAndAdmin, getMonthlyIncome);
router.post("/", verifyToken, createOrder);
router.patch("/:orderId", verifyTokenAndAdmin, updateOrder);
router.delete("/:orderId", verifyTokenAndAdmin, deleteOrder);

//========================
module.exports = router;
