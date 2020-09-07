const express = require("express");
const router = express.Router();
const {
  getComments,
  addComment,
  deleteComment,
} = require("../controllers/comments_controller");

router.route("/").get(getComments).post(addComment);

router.route("/:id").delete(deleteComment);
module.exports = router;
