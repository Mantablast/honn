import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from 'react';

function Nav() {
  return (
    <div className="nav-box">
      <div className="topnav" id="myTopnav">
        <Link to="/honn" className="active">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/connect">Connect</Link>
        <Link to="/news">News</Link>
        <div className="dropdown">
          <button className="dropbtn">Apply
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <Link to="/rules">Rules</Link>
            <a href="https://form.jotform.com/73094247767265?fbclid=IwAR3OSCa8Syfg3cVLPjrMAsnjjJ5WzQ1uD4pdOSbYSKbBoemJqbdNjUgLEBY" target="_blank">Apply Here</a>
          </div>
        </div>
        <a href="javascript:void(0);" className="icon" onclick="myFunction()">&#9776;</a>
      </div>
        <a href="https://form.jotform.com/212186680940256" target="_blank"><img className="donate-img" src='https://user-images.githubusercontent.com/71906988/128613331-e6e3d30a-d8a6-46e9-b3ff-89ecca5d1a0f.png'></img></a>
    
    </div>
  )
}

export default Nav;
