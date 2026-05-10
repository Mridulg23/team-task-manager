// src/pages/Login.jsx
import { useState } from "react";
import API from "../api/api";
import "../styles/form.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await API.post("/auth/login", form);
    console.log(res.data);
    localStorage.setItem("token", res.data.token);
    window.location.href = "/dashboard";
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Email" onChange={(e) => setForm({...form, email: e.target.value})}/>
        <input type="password" placeholder="Password" onChange={(e) => setForm({...form, password: e.target.value})}/>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;