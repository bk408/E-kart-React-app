import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container">
      <div className="grid grid-two-column">
        <div className="hero-section-data">
          <p className="intro-data">Welcome to</p>
          <h1>Ekart</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione itaque obcaecati quis est maiores! Laborum molestiae quis debitis explicabo tenetur.</p>
          <Link>
          <button className="btn btn-outline-dark">Shop Now</button>
          </Link>
        </div>
      <figure>
        <img src="/assets/hero.jpg" alt="hero" className="hero-img"  height= "400px"/>
      </figure>
      </div>
      
    </div>
    
  )
}

export default About;
