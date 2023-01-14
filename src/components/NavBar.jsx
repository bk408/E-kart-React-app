import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const state = useSelector((state) => state.handleCart)
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">Ekart</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="buttons">

            {isAuthenticated ?<button className="btn btn-outline-dark ms-2" onClick={() => logout({ returnTo: window.location.origin })}>
            <i class="fa-solid fa-right-from-bracket"></i>Log Out</button> :(
              
              <button className="btn btn-outline-dark" onClick={() => loginWithRedirect()}>
              <i className="fa fa-sign-in me-1"></i>Log In</button>
            )}

            

            


            <Link to="/signup" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus me-1"></i> Signup</Link>

            <Link to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa-solid fa-cart-shopping me-1"></i>{state.length}</Link>

          </div>

        </div>
      </div>
    </nav>

  )
}

export default NavBar;
