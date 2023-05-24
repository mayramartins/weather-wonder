import React from "react";
import "./Navbar.css";

const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <a onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
            Home
          </a>
        </li>
        <li>
          {/* eslint-disable jsx-a11y/anchor-is-valid */}
          <a onClick={() => setPage("about")} style={{ cursor: "pointer" }}>
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
