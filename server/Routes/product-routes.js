//libraries
const express = require("express");
//modules
const { verifyTokenAndAdmin } = require("../Helper/verifyTokenAndId");
const productController = require("../Controllers/product-controller");
//-------------------------------
const router = express.Router();

router.post("/", verifyTokenAndAdmin, productController.createNewProduct);
router.patch("/:productId", verifyTokenAndAdmin, productController.editProduct);
router.delete(
  "/:productId",
  verifyTokenAndAdmin,
  productController.deleteProduct
);
router.get("/", productController.getAllProducts);
router.get("/:productId", productController.getProduct);

//=====================
module.exports = router;
