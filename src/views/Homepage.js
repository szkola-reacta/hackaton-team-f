import React from 'react';
import {NavLink } from 'react-router-dom';

function Homepage() {
  return (
    <div className="homepage">
    <div className="pageTitle">Summer offers </div>
    <NavLink to='/offer'>
    <button className ="go">
      Let's go!
    </button>
    </NavLink>
    </div>
  )
}

export default Homepage;