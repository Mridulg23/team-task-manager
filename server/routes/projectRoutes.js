const express = require("express");
const router = express.Router();

const {
  getProjects,
  createProject
} = require("../controllers/projectController");

const auth = require("../middleware/authMiddleware");

router.get("/", auth, getProjects);

router.post("/", auth, createProject);

module.exports = router;