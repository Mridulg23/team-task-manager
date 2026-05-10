import { Link } from "react-router-dom";

function Navbar() {

  const logout = () => {

    localStorage.removeItem("token");

    window.location.href = "/";

  };

  return (

    <div
      style={{
        padding: "15px",
        background: "#222",
        display: "flex",
        gap: "20px"
      }}
    >

      <Link to="/dashboard" style={{ color: "white" }}>
        Dashboard
      </Link>

      <Link to="/projects" style={{ color: "white" }}>
        Projects
      </Link>

      <Link to="/tasks" style={{ color: "white" }}>
        Tasks
      </Link>

      <button onClick={logout}>
        Logout
      </button>

    </div>

  );
}

export default Navbar;