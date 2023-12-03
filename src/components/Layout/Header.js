
import React from 'react';
import { NavLink,Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" className="navbar-brand" href="#">ECOMMERCE APP</Link>
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register" className="nav-link" href="#">Register</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link" href="#">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link disabled" href="#">Cart(0)</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
