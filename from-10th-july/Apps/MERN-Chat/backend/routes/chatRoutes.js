const express = require("express");
const { protect } = require("../middlewares/authMiddleWares");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroupChat,
  removeFromGroup,
  addToGroup,
} = require("../controllers/chatControllers");

const router = express.Router();

router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/group_rename").put(protect, renameGroupChat);
router.route("/group_remove").put(protect, removeFromGroup);
router.route("/group_add").put(protect, addToGroup);

module.exports = router;
