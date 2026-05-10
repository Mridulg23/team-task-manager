// src/components/ProjectCard.jsx
function ProjectCard({ project }) {
  return (
    <div className="task-card">
      <h4>{project.name}</h4>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;