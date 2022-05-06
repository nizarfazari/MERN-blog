const { validationResult } = require("express-validator");

exports.createBlog = (req, res, next) => {
  const title = req.body.title;
  const image = req.body.image;
  const body = req.body.body;

  const error = validationResult(req);

  if (!error.isEmpty()) {
    const err = new Error("input tidak sesuai");
    err.errorStatus = 400;
    err.data = error.array();
    throw err;
  }

  const result = {
    message: "Create Blog Post Success",
    data: {
      post_id: 1,
      title: title,
      Image: "image.png",
      body: body,
      created_at: "12/21/2001",
      author: {
        author_id: 1,
        name: "testing",
      },
    },
  };
  res.status(201).json(result);
  next();
};
