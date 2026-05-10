const express = require("express");

const router = express.Router();

const {
  getTasks,
  createTask,
  updateTaskStatus
} = require("../controllers/taskController");

const auth = require("../middleware/authMiddleware");

router.get("/", auth, getTasks);

router.post("/", auth, createTask);

router.put("/:id", auth, updateTaskStatus);

module.exports = router;