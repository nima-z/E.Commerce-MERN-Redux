const express = require("express");
const router = express.Router();

const { collectProductsTitle } = require("../Controllers/search-controller");

router.get("/", collectProductsTitle);

module.exports = router;
