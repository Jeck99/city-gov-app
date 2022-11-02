import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
        <Link to="/">
          <button>HOME</button>
        </Link>
        <Link to="/about">
          <button>ABOUT</button>
        </Link>
        <Link to="/info">
          <button>INFO</button>
        </Link>
        <Link to="/movies">
          <button>MOVIES</button>
        </Link>
    </div>
  );
};

export default Navbar;
