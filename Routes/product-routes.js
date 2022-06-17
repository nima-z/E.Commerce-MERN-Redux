//libraries
const express = require("express");
//modules
const { verifyTokenAndAdmin } = require("../Helper/verifyTokenAndId");
const {
  createNewProduct,
  editProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
} = require("../Controllers/product-controller");
//----------------------------------------------------------------

const router = express.Router();

router.post("/", verifyTokenAndAdmin, createNewProduct);
router.patch("/:productId", verifyTokenAndAdmin, editProduct);
router.delete("/:productId", verifyTokenAndAdmin, deleteProduct);
router.get("/", getAllProducts);
router.get("/:productId", getProduct);

//=====================
module.exports = router;
