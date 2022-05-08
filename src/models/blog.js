const mongoose = require("mongoose");
const schema = mongoose.Schema;

const BlogPost = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//mengeksport model dan format model
module.exports = mongoose.model("BlogPost", BlogPost);
