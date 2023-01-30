import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mt-5 ">
      <div className="row align-items-center">
        <div className="col">
          <p className="intro-data">Welcome to</p>
          <h1>Ekart</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione itaque obcaecati quis est maiores! Laborum molestiae quis debitis explicabo tenetur.</p>
          <Link to="/">
          <button className="btn btn-outline-dark">
          <i className="fa-sharp fa-solid fa-cart-plus me-1"></i>Shop Now</button>
          </Link>
        </div>
      <div className="col">
        <img src="/assets/hero.jpg" alt="hero" className="hero-img"  height= "400px"/>
      </div>
      </div>
      
    </div>
    
  )
}

export default About;
