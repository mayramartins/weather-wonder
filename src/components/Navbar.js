import React from "react";
import "./Navbar.css";

const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
            Home
          </a>
        </li>
        <li>
          <a onClick={() => setPage("about")} style={{ cursor: "pointer" }}>
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
