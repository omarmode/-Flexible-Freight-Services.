import React, { useState } from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
function Nav() {
  return (
    <header>
      <nav>
        <ul className="flex">
          <li className="logo">logo</li>
          <li className="mod ">
            <button>
              <Link to="/">Home</Link>
            </button>
          </li>
          <li className="mod">
            <button>
              <Link to="/about">About us</Link>
            </button>
          </li>
          <li className="mod">
            <Link to="/Sev">Services</Link>
          </li>
          <li className="mod">
            <Link to="/CaseStudies">Case Studies</Link>
          </li>

          {/* <button className="menu">Menu</button> */}
          <li className="footer">
            @ 01096687155
            <br />
            <span className="footer-item">Information Center</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
