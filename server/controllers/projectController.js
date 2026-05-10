// controllers/projectController.js
const db = require("../config/db");

exports.getProjects = (req, res) => {
  db.query("SELECT * FROM projects", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ projects: result }); // matches your frontend
  });
};

exports.createProject = (req, res) => {

  const { name, description } = req.body;

  db.query(
    "INSERT INTO projects (name, description, created_by) VALUES (?, ?, ?)",
    [name, description, req.user.id],
    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Project created"
      });

    }
  );
};