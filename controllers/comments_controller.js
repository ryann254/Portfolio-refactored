const Comment_Model = require("../models/Comment_Model");

// @desc Get all Comments
// @route /api/v1/comments
// @access public
exports.getComments = async (req, res, next) => {
  try {
    const comments = await Comment_Model.find();

    return res.status(200).json({
      success: true,
      count: comments.length,
      data: comments,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Failure",
    });
  }
};

// @desc Add a Comment
// @route /api/v1/comments
// @access public
exports.addComment = async (req, res, next) => {
  try {
    const { title, subtitle, content } = req.body;
    const comment = await Comment_Model.create(req.body);

    return res.status(201).json({
      success: true,
      data: comment,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(
        (value) => value.message
      );

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Failure",
      });
    }
  }
};

// @desc Delete a Comment
// @route /api/v1/comments/:id
// @access public
exports.deleteComment = async (req, res, next) => {
  res.send("Delete a Comment");
};
