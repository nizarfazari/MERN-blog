const { validationResult } = require("express-validator");
const BlogPost = require("../models/blog");
const path = require("path");
const fs = require("fs");

exports.createBlog = (req, res, next) => {
  const error = validationResult(req);

  //bila tidak ada error
  if (!error.isEmpty()) {
    const err = new Error("input tidak sesuai");
    err.errorStatus = 400;
    err.data = error.array();
    throw err;
  }

  if (!req.file) {
    const err = new Error("harus di upload");
    err.errorStatus = 422;
    throw err;
  }

  const title = req.body.title;
  const image = req.file.path;
  const body = req.body.body;

  const Posting = new BlogPost({
    title: title,
    image: image,
    body: body,
    author: {
      uid: 1,
      name: "nizar",
    },
  });

  Posting.save()
    .then((result) => {
      res.status(201).json({
        message: "Create Blog Post Success",
        data: result,
      });
    })
    .catch((err) => {
      console.log("error = ", err);
    });
};

exports.getAllBlogpost = (req, res, next) => {
  const currentPage = parseInt(req.query.page) || 1;
  const perPage = parseInt(req.query.perPage) || 5;

  let totalItems;

  BlogPost.find()
    .countDocuments()
    .then((count) => {
      totalItems = count;
      return BlogPost.find()
        .skip((currentPage - 1) * perPage)
        .limit(perPage);
    })
    .then((result) => {
      res.status(201).json({
        message: "Data berhasil di panggil",
        data: result,
        total_data: totalItems,
        per_page: perPage,
        current_page: currentPage,
      });
    })
    .catch((err) => next(err));

  // BlogPost.find()
  //   .then((result) => {
  //     res.status(201).json({
  //       message: "Data berhasil di panggil",
  //       data: result,
  //     });
  //   })
  //   .catch((err) => {
  //     next(err);
  //   });
};

exports.getBlogpostById = (req, res, next) => {
  const postId = req.params.postId;
  BlogPost.findById(postId)
    .then((result) => {
      if (!result) {
        const error = new Error("data tidak di temukan");
        error.errorStatus = 404;
        throw error;
      }
      res.status(201).json({
        message: "Data berhasil di panggil",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.updateBlogpost = (req, res, next) => {
  const error = validationResult(req);

  //bila tidak ada error
  if (!error.isEmpty()) {
    const err = new Error("input tidak sesuai");
    err.errorStatus = 400;
    err.data = error.array();
    throw err;
  }

  if (!req.file) {
    const err = new Error("harus di upload");
    err.errorStatus = 422;
    throw err;
  }

  const title = req.body.title;
  const image = req.file.path;
  const body = req.body.body;
  const postId = req.params.postId;

  //promise
  BlogPost.findById(postId)
    .then((post) => {
      if (!post) {
        console.log(!post);
        const err = new Error("Data tidak ditemukan");
        err.errorStatus = 404;
        throw err;
      }

      post.title = title;
      post.body = body;
      post.image = image;

      return post.save();
    })
    .then((result) => {
      res.status(200).json({
        message: "Update Success",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteBlogpost = (req, res, next) => {
  const postId = req.params.postId;

  BlogPost.findById(postId)
    .then((post) => {
      if (!post) {
        const err = new Error("Data tidak ditemukan");
        err.errorStatus = 404;
        throw err;
      }

      //menghapus gambar
      removeImage(post.image);
      //membuat promise baru
      return BlogPost.findByIdAndRemove(postId);
    })
    .then((result) => {
      console.log("result = ", result);
      res.status(200).json({
        message: "Blog berhasil di hapus",
        data: result,
      });
    })
    .catch((err) => {
      next(err);
    });
};

const removeImage = (filepath) => {
  filepath = path.join(__dirname, "../../", filepath);
  fs.unlink(filepath, (err) => {
    console.log(err);
  });
};
