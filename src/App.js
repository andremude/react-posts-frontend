import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {BrowserRouter as Route, Routes, useNavigate} from "react-router-dom";
import SignUp from "./components/SignUp"
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import PostList from "./components/PostList";
import Footer from "./components/Footer"
import Home from "./components/Home";
import "./styles/App.css"
import Arrow from "./images/arrow.svg"
import Authenticate from "./images/auth.svg"

function App() {

  const [showButton, setShowButton] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
      // fetch("http://localhost:3000/api/v1/autologin"
      fetch("https://rails-posts-api.herokuapp.com/api/v1/autologin", {
      credentials: "include",
    })
      .then((r) => {
        if (!r.ok) throw Error("Not logged in!");
        return r.json();
      })
      .then((user) => setCurrentUser(user))
      .catch((err) => console.error(err));
  }, []);

  function handleLogout() {
    // fetch("http://localhost:3000/api/v1/logout"
    fetch("https://rails-posts-api.herokuapp.com/api/v1/logout", {
    method: "POST",
    credentials: "include",
    })
      .then((r) => r.json())
      .then(() => setCurrentUser(null));
      navigate("/login")
  }

  function onUpdateUser(user) {
    setCurrentUser(user);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
  <div className="app">
    <NavBar currentUser={currentUser} onLogout={handleLogout} />
    <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp onUpdateUser={onUpdateUser} />} />
        <Route path="/login" element={<Login onUpdateUser={onUpdateUser} />} />
        <Route path="/posts" element={currentUser ? (
            <PostList/>
            ) : (
            <Navigate to="/auth" />)} />
        <Route path="/auth" element={<div className="auth-container">
                                  <img src={Authenticate} alt="authenticate" className="authentication-svg" />
                                  <h1>LOG IN OR SIGN UP TO VIEW POSTS</h1>
                                </div>} />
      </Routes>
    </main>
    <Footer />
    {showButton && (
      <img src={Arrow} alt="arrow" onClick={scrollToTop} className="back-to-top" />
    )}
  </div>
  );
}

export default App;
