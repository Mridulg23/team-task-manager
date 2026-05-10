// controllers/taskController.js
const db = require("../config/db");

exports.getTasks = (req, res) => {
  db.query("SELECT * FROM tasks", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

exports.createTask = (req, res) => {
  const { title, description, project_id, assigned_to, due_date } = req.body;

  db.query(
    `INSERT INTO tasks (title, description, project_id, assigned_to, due_date)
     VALUES (?, ?, ?, ?, ?)`,
    [title, description, project_id, assigned_to, due_date],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Task created" });
    }
  );
};
exports.updateTaskStatus = (req, res) => {

  const { status } = req.body;

  db.query(
    "UPDATE tasks SET status = ? WHERE id = ?",
    [status, req.params.id],

    (err, result) => {

      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Task updated"
      });

    }
  );
};