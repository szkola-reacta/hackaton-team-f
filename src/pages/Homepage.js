import React from "react";
import { NavLink } from "react-router-dom";
import Searching from "../components/Searching/Searching";

function Homepage() {
  return (
    <div className="homepage">
    <div className="pageTitle">
      Summer offers
      <Searching/>
    </div>
    <NavLink to='/offer'>
    <button className ="go">
      Let's go!
    </button>
    </NavLink>
    </div>
  );
}

export default Homepage;