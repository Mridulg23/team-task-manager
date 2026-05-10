// src/pages/Register.jsx
import { useState } from "react";
import API from "../api/api";
import { Link } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    window.location.href = "/";
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button>Register</button>
        <p style={{ marginTop: "15px" }}>
          Already have an account?
        </p>

        <Link to="/login">
          <button type="button">
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Register;