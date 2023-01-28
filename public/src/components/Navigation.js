import React from "react";
import "../css/Navigation.css";

function Navigation() {
  return (
    <div className="Navigation">
      <div className="NavContainer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/126/126477.png"
          alt=""
          onClick={() => (window.location = "/")}
        ></img>
        <ul className="NavList">
          <li className="NavItem">
            <a href="/">Upload Resume</a>
          </li>
          <li className="NavItem">
            <a href="/view">View Resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
