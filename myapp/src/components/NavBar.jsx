// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="Logo" />
      </div>
      <div className="search-bar">
      </div>
      <div className="nav-links">
        <Link to="/contact">Contact Us</Link>
        {window.localStorage.getItem("name") ? (
          <a>{window.localStorage.getItem("name")}</a>
        ) : (
          <Link to="/register">Register</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
