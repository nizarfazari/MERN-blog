const express = require("express");
const router = require("router");

router.use("/products", (req, res, next) => {
  console.log();
});

const app = express();
app.listen(4000);
