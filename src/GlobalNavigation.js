import React from "react";
import { NavLink } from "react-router-dom";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function GlobalNavigation({
  handleClick,
  handleClose,
  anchorEl,
}) {
  return (
    <header className="App-header">
      <ul className="App-menu">
        <li className="App-menu__item">
          <NavLink to="/dashboard">Start</NavLink>
        </li>
        <li className="App-menu__item">
          <NavLink to="/booking">Booking</NavLink>
        </li>
        <li className="App-menu__item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="App-menu__item">
          <NavLink to="/admin">Admin</NavLink>
        </li>
        <li className="App-menu__item">
          <IconButton
            aria-controls="client-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <AccountCircleIcon />
          </IconButton>
          <Menu
            id="client-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <NavLink to="/login">Sign in</NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <NavLink to="/registration">Sign up</NavLink>
            </MenuItem>
          </Menu>
        </li>
      </ul>
    </header>
  );
}
