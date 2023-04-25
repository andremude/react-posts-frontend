import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../styles/SignUp.css'

function SignUp({ onUpdateUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // fetch("http://localhost:3000/api/v1/signup"
    fetch("https://rails-posts-api.fly.dev/api/v1/signup"
    , {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((user) => onUpdateUser(user))
      .then(navigate('/'));
  }

  const { username, password } = formData;

  return (
  <div className="signup-container">
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>

      <label>Username</label>
      <input
        type="text"
        name="username"
        autoComplete="off"
        value={username}
        onChange={handleChange}
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        autoComplete="current-password"
        value={password}
        onChange={handleChange}
      />

      <button type="submit" className="signup-btn">Sign Up</button>
      <p>Already have an account? <Link to="/login"><b>Log In</b></Link></p>
    </form>
  </div>
  );
}

export default SignUp;
