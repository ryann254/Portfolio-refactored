const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please include your title"],
  },
  subtitle: {
    type: String,
    trim: true,
  },
  content: {
    type: String,
    trim: true,
    required: [true, "Please include your content"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment-Model", CommentSchema);
