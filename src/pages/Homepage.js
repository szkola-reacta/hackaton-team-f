import React from "react";
import { NavLink } from "react-router-dom";
import Searching from "../components/Searching/Searching";
import { Button } from "@material-ui/core";
function Homepage() {
  return (
    <div className="homepage">
    <div className="pageTitle">
      Summer offers
      <Searching/>
    </div>
    <NavLink to='/offer'>
    <Button type="submit" variant="outlined" color="default" >Show all offers</Button>
    </NavLink>
    </div>
  );
}

export default Homepage;