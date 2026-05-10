import { useEffect, useState } from "react";
import API from "../api/api";

function Tasks() {

  const [tasks, setTasks] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    project_id: "",
    assigned_to: "",
    due_date: ""
  });

  // Fetch Tasks
  const fetchTasks = async () => {

    try {

      const res = await API.get("/tasks");

      console.log(res.data);

if (Array.isArray(res.data)) {

  setTasks(res.data);

} else if (Array.isArray(res.data.tasks)) {

  setTasks(res.data.tasks);

} else {

  setTasks([]);

}

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Create Task
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/tasks", form);

      alert("Task Created");

      setForm({
        title: "",
        description: "",
        project_id: "",
        assigned_to: "",
        due_date: ""
      });

      fetchTasks();

    } catch (err) {
      console.log(err);
      alert("Failed to create task");
    }
  };
  

  return (
    <div style={{ padding: "20px" }}>

      <h2>Create Task</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) =>
            setForm({ ...form, title: e.target.value })
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />

        <br /><br />

        <input
          type="number"
          placeholder="Project ID"
          value={form.project_id}
          onChange={(e) =>
            setForm({ ...form, project_id: e.target.value })
          }
        />

        <br /><br />

        <input
          type="number"
          placeholder="Assigned User ID"
          value={form.assigned_to}
          onChange={(e) =>
            setForm({ ...form, assigned_to: e.target.value })
          }
        />

        <br /><br />

        <input
          type="date"
          value={form.due_date}
          onChange={(e) =>
            setForm({ ...form, due_date: e.target.value })
          }
        />

        <br /><br />

        <button type="submit">
          Create Task
        </button>

      </form>

      <hr />

      <h2>All Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px"
            }}
          >
            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>Status: {task.status}</p>

            <p>Due: {task.due_date}</p>
          </div>
        ))
      )}

    </div>
  );
}

export default Tasks;