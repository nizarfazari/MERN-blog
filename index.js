const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongose = require("mongoose");

const productRoutes = require("./src/routers/products");
const authRoutes = require("./src/routers/auth");
const blogRoutes = require("./src/routers/blog");
const { body } = require("express-validator");
//yang akan kita terima adalah type json
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

const validation = [body("title").isLength({ min: 5 }).withMessage("input title tidak sesuai"), body("body").isLength({ min: 5 }).withMessage("input body tidak sesuai")];
app.use("/", productRoutes);
app.use("/v1/auth", authRoutes);
app.use("/v1/blog", validation, blogRoutes);

app.use((err, req, res, next) => {
  const status = err.errorStatus || 500;
  const message = err.message;
  const data = err.data;
  res.status(status).json({ message: message, data: data });
});

//mengkoneksikan monggodb ke nodejs
mongose
  .connect("mongodb+srv://nizar:rUaxQFp1ZQkKwlDq@cluster0.4mfiy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  .then(() => {
    app.listen(4000);
  })
  .catch((err) => console.log(err));
