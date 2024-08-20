const express = require("express");
const router = express();

const {
  getproduct,
  getproducts,
  createproduct,
  updateproduct,
  deleteproduct,
} = require("../controller/product.controller.js");

router.get("/", getproducts);

router.get("/:id", getproduct);

router.post("/", createproduct);

router.put("/:id", updateproduct);

router.delete("/:id", deleteproduct);

module.exports = router;
