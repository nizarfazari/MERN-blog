const express = require("express");
const bodyParser = require("body-parser");
const mongose = require("mongoose");
const multer = require("multer");
const path = require("path");

const app = express();
const productRoutes = require("./src/routers/products");
const authRoutes = require("./src/routers/auth");
const blogRoutes = require("./src/routers/blog");

const fileStorage = multer.diskStorage({
  //destinasi yang akan di simpan
  destination: (req, res, cb) => {
    //jikalau sukses
    cb(null, "images");
  },
  //format penamaan
  filename: (req, file, cb) => {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
    //parameter 1 digunakan jika tidak ada error
    cb(null, true);
  } else {
    cb(null, false);
  }
};

//yang akan kita terima adalah type json
app.use(bodyParser.json());

app.use("/images", express.static(path.join(__dirname, "images")));
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single("image"));

//solusi cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use("/", productRoutes);
app.use("/v1/auth", authRoutes);
app.use("/v1/blog", blogRoutes);

app.use((err, req, res, next) => {
  const status = err.errorStatus || 500;
  const message = err.message;
  const data = err.data;
  res.status(status).json({ message: message, data: data });
});

//mengkoneksikan monggodb ke nodejs
mongose
  .connect("mongodb+srv://nizar:rUaxQFp1ZQkKwlDq@cluster0.4mfiy.mongodb.net/blog?retryWrites=true&w=majority")
  .then(() => {
    app.listen(4000, () => console.log("succses"));
  })
  .catch((err) => console.log("error bos", err));
