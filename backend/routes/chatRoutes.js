const express = require("express");
const protect = require("../middleware/authMiddleware");
const {
  accessChats,
  fetchChats,
  createGroup,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controller/chatController");

const router = express.Router();

router.route("/").post(protect, accessChats);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroup);
router.route("/rename").put(protect, renameGroup);
router.route("/add").put(protect, addToGroup);
router.route("/remove").put(protect, removeFromGroup);

module.exports = router;
