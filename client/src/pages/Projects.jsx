import { useEffect, useState } from "react";
import API from "../api/api";
import ProjectCard from "../components/ProjectCard";

function Projects() {

  const [projects, setProjects] = useState([]);

  const [form, setForm] = useState({
    name: "",
    description: ""
  });

  // Fetch projects
  const fetchProjects = async () => {
    try {

      const res = await API.get("/projects");

      console.log(res.data);

      if (Array.isArray(res.data)) {
        setProjects(res.data);

      } else if (Array.isArray(res.data.projects)) {
        setProjects(res.data.projects);

      } else {
        setProjects([]);
      }

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Create Project
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await API.post("/projects", form);

      alert("Project Created");

      setForm({
        name: "",
        description: ""
      });

      fetchProjects();

    } catch (err) {
      console.log(err);
      alert("Failed to create project");
    }
  };

  return (
    <div style={{ padding: "20px" }}>

      <h2>Create Project</h2>

      {/* Form */}
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Project Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
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

        <button type="submit">
          Create Project
        </button>

      </form>

      <hr />

      {/* Project List */}
      <h2>All Projects</h2>

      {projects.length === 0 ? (
        <p>No projects found</p>
      ) : (
        projects.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
          />
        ))
      )}

    </div>
  );
}

export default Projects;