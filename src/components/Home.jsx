import React from 'react'
import '../styles/Home.css'
import Explore from '../images/explore.svg'
import Learn from '../images/learn.svg'
import Connect from '../images/connect.svg'

const Home = () => {
  return (
    <>
    <div className='home-hero'>
      <h1>Explore. Learn. Connect.</h1>
    </div>
    <div class="how-works-container">
      <h2>How it works</h2>
      <div class="cards">
        <div class="card">
          {/* <img src = "images/apply.svg" attr="apply svg"> */}
          <img src={Explore} alt="explore" className="card-svg" />
          <h3>Explore</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div class="card">
          <img src={Learn} alt="learn" className="card-svg" />
          <h3>Learn</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div class="card">
          <img src={Connect} alt="connect" className="card-svg" />
          <h3>Connect</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
