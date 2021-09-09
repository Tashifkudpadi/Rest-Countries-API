import React from "react";
import "./Navbar.css";

function Navbar(props) {
  return (
    <div className="nav">
      <h3>Where in the world?</h3>
      <button onClick={props.popup}>
        <span>
          <i className="fas fa-moon"></i>
        </span>
        DarkMode
      </button>
    </div>
  );
}

export default Navbar;
