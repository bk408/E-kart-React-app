import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const { cartTotalQuantity} = useSelector(state => state.cart)
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
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
              <Link className="nav-link ms-5" to="/products">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link ms-5" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link ms-5" to="/contact">Contact</Link>
            </li>
          </ul>
           
          <div className="navbar-nav mx-auto my-2 mb-lg-0 btn-dark">

          {isAuthenticated && <h6>{user.name}</h6>}
          </div>

          <div className="buttons">

            {isAuthenticated ?<button className="btn btn-outline-dark ms-2" onClick={() => logout({ returnTo: window.location.origin })}>
            <i className="fa-solid fa-right-from-bracket"></i>Log Out</button> :(
              
              <button className="btn btn-outline-dark" onClick={() => loginWithRedirect()}>
              <i className="fa fa-sign-in me-1"></i>Log In</button>
            )}

            <Link to="/cart" className="btn btn-outline-dark ms-2">
              <i className="fa-solid fa-cart-shopping me-1"></i>{cartTotalQuantity}</Link>

          </div>

        </div>
      </div>
    </nav>

  )
}

export default NavBar;
