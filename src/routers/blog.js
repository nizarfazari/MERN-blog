const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const blogController = require("../controllers/blog");
//validasi
const validation = [body("title").isLength({ min: 5 }).withMessage("input title tidak sesuai"), body("body").isLength({ min: 5 }).withMessage("input body tidak sesuai")];

router.post("/post", validation, blogController.createBlog);
router.get("/posts", blogController.getAllBlogpost);
router.get("/post/:postId", blogController.getBlogpostById);
router.put("/post/:postId", validation, blogController.updateBlogpost);
router.delete("/post/:postId", blogController.deleteBlogpost);

module.exports = router;
