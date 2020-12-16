import React from "react";

import { NavLink } from 'react-router-dom';
import "../App.scss"

function HomeSelect() {
  return (
    <div className="homeSelect">
      <div className="homeSelect__box">
        <div className="pageTitle">Summer offers </div>
        <NavLink to="/dashboard">
          <button className="homeSelect__go">Let's go!</button>
        </NavLink>
      </div>
      <div className="homeSelect__box homeSelect__box--winter">
        <div className="pageTitle">Winter offers </div>
        <NavLink to="/dashboard">
          <button className="homeSelect__go">Let's go!</button>
        </NavLink>
      </div>
    </div>
  );
}

export default HomeSelect;
