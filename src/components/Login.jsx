import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/Login.css'

function Login({ onUpdateUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

 function handleSubmit(e) {
    e.preventDefault();
    //  fetch("http://localhost:3000/api/v1/login"
     fetch("https://rails-posts-api.fly.dev/api/v1/login"
     , {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body:  JSON.stringify(formData),
    })
    .then((r) => {
      if (!r.ok) {
        throw Error("Incorrect username or password!")
        .then(alert("Incorrect username or password!"))
      } else {
        return r.json()
        .then((user) => onUpdateUser(user))
        .then(navigate('/'))
      };
    })
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1>Log In</h1>
        <label>Username</label>
        <input
          type="text"
          name="username"
          autoComplete="off"
          value={formData.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
        <button type="submit" className="login-btn">Log In</button>
        <p>Don't have an account? <Link to="/signup"><b>Sign Up</b></Link></p>
      </form>
    </div>
  );
}

export default Login;
