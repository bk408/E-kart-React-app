import React from 'react'
import { Link } from 'react-router-dom';



const About = () => {
  return (
    <div className="container mt-5 ">
      <div className="row align-items-center">
        <div className="col">
          
          <h1>About EKart</h1>
          <p>EKart is a one-stop online shopping destination, offering a wide range of products at affordable prices. Our mission is to make shopping easy, convenient, and accessible to everyone. With a user-friendly website and a vast selection of products, we strive to provide a seamless shopping experience to our customers.</p>
          <p>From fashion and electronics to home goods and groceries, we have everything you need in one place. Our products are carefully selected and regularly updated to keep up with the latest trends and customer demands. Our commitment to quality, affordability, and customer satisfaction is what sets us apart from the rest.</p>
          <p>Shop with EKart today and experience the best in online shopping.</p>
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
