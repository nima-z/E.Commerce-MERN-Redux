//libraries
const express = require("express");
//modules
const { payment } = require("../Controllers/stripe-controller");
//-------------------------------
const router = express.Router();

router.post("/payment", payment);
//======================
module.exports = router;
