import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from 'react';

function Nav() {
    return (
        <div className="topnav" id="myTopnav">
  <Link to="/" className="active">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/connect">Connect</Link>
  <Link to="/news">News</Link>
  <div className="dropdown">
    <button className="dropbtn">Apply
      <i className="fa fa-caret-down"></i>
    </button>
    <div className="dropdown-content">
    <Link to="/rules">Rules</Link>
      <Link to="/apply">Apply Here</Link>
      <a href="#">Link 3</a>
    </div>
  </div>
  <a href="#about">About</a>
  <a href="javascript:void(0);" className="icon" onclick="myFunction()">&#9776;</a>
</div>
    )
}

export default Nav;

<nav>
        <div className="nav-wrapper 1a237e 1a237e indigo darken-4">
          <a href="#" className="brand-logo center">
          🚀Aimee Jesso 🚀
          </a>
          
          <ul id="nav-mobile" className="right">
            <li>
            <Link to="/aboutme">About</Link>
            </li>
            <li>
            <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <li>
            <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </div>
        <div className="banner"></div>
      </nav>