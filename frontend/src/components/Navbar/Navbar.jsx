import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { FaSearch, FaShoppingCart, FaHome, FaInfoCircle, FaUtensils, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Side - Logo */}
        <div className="logo-container" style={{ flex: "1" }}>
          <img src="./logo.png" alt="Logo" style={{ height: "40px", cursor: "pointer" }} />
        </div>

        {/* Centered Links with Icons */}
        <ul className="navbar-links" style={{ flex: "2", display: "flex", justifyContent: "center", gap: "20px", listStyleType: "none" }}>
          <li>
            <NavLink to="/home" activeClassName="active">
              <FaHome style={{ marginRight: "8px" }} /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              <FaInfoCircle style={{ marginRight: "8px" }} /> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" activeClassName="active">
              <FaUtensils style={{ marginRight: "8px" }} /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              <FaEnvelope style={{ marginRight: "8px" }} /> Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Right Side Actions */}
        <div className="navbar-actions" style={{ flex: "1", display: "flex", justifyContent: "flex-end", gap: "15px" }}>
          <NavLink to="/search" className="icon"><FaSearch /></NavLink>
          <NavLink to="/cart" className="icon"><FaShoppingCart /></NavLink>
          <button className="auth-btn">Login</button>
          <button className="auth-btn signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
