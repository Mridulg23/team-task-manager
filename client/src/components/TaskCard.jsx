// src/components/TaskCard.jsx
import "../styles/task.css";

function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h4>{task.title}</h4>
      <select
  value={task.status}
  onChange={(e) =>
    updateStatus(task.id, e.target.value)
  }
>

  <option>Todo</option>

  <option>In Progress</option>

  <option>Done</option>

</select>


    </div>
  );
}

export default TaskCard;