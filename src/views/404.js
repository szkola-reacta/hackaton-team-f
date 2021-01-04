import React from 'react';
import { NavLink } from 'react-router-dom';
import Searching from '../components/Searching/Searching';

function Page404() {
  return (
    <>
      <h2>Page not found</h2>
      <Searching/>
      or return to {<NavLink to="/dashboard">Homepage</NavLink>}
    </>
  )
}

export default Page404;