const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  image : String,
  caption: String
});

const postModel = mongoose.model("post", postSchema);
// "post" -> is model name and it is collection of postSchema data

module.exports = postModel;