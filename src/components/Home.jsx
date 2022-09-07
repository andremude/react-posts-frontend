import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Home.css'
import Explore from '../images/explore.svg'
import Learn from '../images/learn.svg'
import Connect from '../images/connect.svg'

const Home = () => {
  return (
    <>
    <div className='home-hero'>
      {/* <h1>Explore. Learn. Connect.</h1> */}
      <div class="wrapper">
        <h1 class="hero-text">Explore.</h1>
      </div>
      <div class="wrapper">
        <h1 class="hero-text">Learn.</h1>
      </div>
      <div class="wrapper">
        <h1 class="hero-text">Connect.</h1>
      </div>
      <Link to="/posts" className="btn-blue">Posts</Link>
    </div>
    <div className="how-works-container">
      <h2>How it works</h2>
      <div className="cards">
        <div className="card">
          <img src={Explore} alt="explore" className="card-svg" />
          <h3>Explore</h3>
          <p>Find different topics of interest.</p>
        </div>

        <div className="card">
          <img src={Learn} alt="learn" className="card-svg" />
          <h3>Learn</h3>
          <p>Information easily accessible.</p>
        </div>

        <div className="card">
          <img src={Connect} alt="connect" className="card-svg" />
          <h3>Connect</h3>
          <p>Build relationships with other users.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
