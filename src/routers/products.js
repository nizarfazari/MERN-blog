const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products");

router.get("/products", productsController.getAllProducts);

router.post("/product", productsController.createProduct);

module.exports = router;
