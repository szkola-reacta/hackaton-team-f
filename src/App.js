import React, { Component } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import "./App.css";
import api from "./api";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import OfferList from "./components/OfferList/OfferList";
import Registration from "./pages/Registration";
import Page404 from "./pages/404";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
class App extends Component {
  constructor() {
    super();
    this.state = {
      offer: null,
      bookings: null,
      anchorEl: null
    };
    this.loadBookings = this.loadBookings.bind(this);
  }

  componentDidMount() {
    this.loadOffer();
    this.loadBookings();
  }

  load(element) {
    let el;
    api.get(`${element}`).then((response) => {
      el = response;
      this.setState({
        [element]: el,
      });
    });
  }

  loadOffer() {
    this.load("offer");
  }

  loadBookings() {
    this.load("bookings");
  }

  render() {
    const handleClick = (event) => {
      this.setState({
        anchorEl:event.currentTarget
      });
    };

    const handleClose = () => {
      this.setState({
        anchorEl:null
      });
    };
    const { offer, bookings, anchorEl } = this.state;
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <div className="background"></div>
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
                   <AccountCircleIcon/>
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
            <div>
              <Switch>
                <Route exact path={["/dashboard", "/"]} component={Homepage} />
                <Route
                  path="/offer"
                  component={() => <OfferList data={offer} />}
                />
                <Route path="/contact" component={Contact} />
                <Route
                  path={["/search/:query", "/search"]}
                  component={Search}
                />
                <Route path="/booking/:slug" component={Booking} />
                <Route path="/login" component={Login} />
                <Route
                  path="/admin"
                  component={() => (
                    <Admin
                      bookings={bookings}
                      reloadData={() => this.loadBookings()}
                    />
                  )}
                />
                <Route path="/registration" component={Registration} />
                <Route path="*" component={Page404} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
