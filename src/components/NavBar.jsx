import React from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css'
import Avatar from '../images/avatar.png'

function NavBar({ currentUser, onLogout }) {
  return (
    <header>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/posts">Posts</Link>
      </div>
      <div>
        {currentUser ? (
          <div className="username-container">
            <img src={Avatar} alt="Avatar" className="profile-avatar" />
            <p className="username">{currentUser.username}</p>
            <button onClick={onLogout} className="logout-btn">Log Out</button>
          </div>
        ) : (
          <div className="nav-login-signup">
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
