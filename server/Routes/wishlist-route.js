const express = require("express");
const { verifyTokenAndId } = require("../Helper/verifyTokenAndId");
const router = express.Router();

const { setWishlist } = require("../Controllers/wishlist-controller");

router.post("/:userId", verifyTokenAndId, setWishlist);
module.exports = router;
