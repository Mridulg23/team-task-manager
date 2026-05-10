import { useEffect, useState } from "react";
import API from "../api/api";
import "../styles/dashboard.css";

function Dashboard() {

  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    pending: 0,
    overdue: 0
  });

  const [overdueTasks, setOverdueTasks] = useState([]);

  const fetchStats = async () => {

    try {

      const res = await API.get("/tasks");

      const tasks = res.data.tasks || res.data || [];

      const total = tasks.length;

      const completed = tasks.filter(
        (t) => t.status === "Done"
      ).length;

      const pending = tasks.filter(
        (t) => t.status !== "Done"
      ).length;

      const overdueTasksList = tasks.filter((t) => {

        return (
          t.status !== "Done" &&
          new Date(t.due_date) < new Date()
        );

      });

      const overdue = overdueTasksList.length;

      setOverdueTasks(overdueTasksList);

      setStats({
        total,
        completed,
        pending,
        overdue
      });

    } catch (err) {

      console.log(err);

    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (

    <div className="dashboard-container">

      <h1 className="dashboard-title">
        Dashboard
      </h1>

      <div className="stats-grid">

        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p>{stats.total}</p>
        </div>

        <div className="stat-card">
          <h3>Completed</h3>
          <p>{stats.completed}</p>
        </div>

        <div className="stat-card">
          <h3>Pending</h3>
          <p>{stats.pending}</p>
        </div>

        <div className="stat-card">
          <h3>Overdue</h3>
          <p>{stats.overdue}</p>
        </div>

      </div>

      <div className="overdue-section">

        <h2 className="overdue-title">
          Overdue Tasks
        </h2>

        {overdueTasks.length === 0 ? (

          <p>No overdue tasks</p>

        ) : (

          overdueTasks.map((task) => (

            <div
              key={task.id}
              className="task-card"
            >

              <h3>{task.title}</h3>

              <p>{task.description}</p>

              <p>
                Due Date: {task.due_date}
              </p>

              <p>
                Status: {task.status}
              </p>

            </div>

          ))

        )}

      </div>

    </div>

  );
}

export default Dashboard;