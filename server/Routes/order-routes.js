//libraries
const express = require("express");
//modules
const {
  verifyToken,
  verifyTokenAndId,
  verifyTokenAndAdmin,
} = require("../Helper/verifyTokenAndId");
const orderController = require("../Controllers/order-controller");
//--------------------------------

const router = express.Router();

//routes
router.get("/", verifyTokenAndAdmin, orderController.getAllOrders);
router.get("/find/:userId", verifyTokenAndId, orderController.getOrder);
router.get("/income", verifyTokenAndAdmin, orderController.getMonthlyIncome);
router.post("/", verifyToken, orderController.createOrder);
router.patch("/:orderId", verifyTokenAndAdmin, orderController.updateOrder);
router.delete("/:orderId", verifyTokenAndAdmin, orderController.deleteOrder);

//========================
module.exports = router;
