import React, { Component } from "react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.scss";
import api from "./api";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Offers from "./components/OfferList/containers/Offers";
import Registration from "./pages/Registration";
import Page404 from "./pages/404";
import Dashboard from "./pages/admin/Dashboard";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...middleware)
));


class App extends Component {
  constructor() {
    super();
    this.state = {
      offer: null,
      bookings: null,
      anchorEl: null,
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
        anchorEl: event.currentTarget,
      });
    };

    const handleClose = () => {
      this.setState({
        anchorEl: null,
      });
    };
    const { bookings, anchorEl } = this.state;
    return (
      <div>
        <BrowserRouter>
        <Provider store = {store}>
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
            <div>
              <Switch>
                <Route exact path={["/dashboard", "/"]} component={Homepage} />
                <Route
                  path="/offer"
                  component={ Offers } />
                <Route path="/contact" component={Contact} />
                <Route
                  path={["/search/:query", "/search"]}
                  component={Search}
                />
                <Route path="/booking/:slug" component={Booking} />
                <Route path="/login" component={() => (
                    <Login SignIn={this.SignIn} />
                  )}/>
                <Route path="/login" component={Login} />
                <Route exact
                  path="/admin"
                  component={() => (
                    <Admin
                      bookings={bookings}
                      reloadData={() => this.loadBookings()}
                    />
                  )}
                />
                <PrivateRoute exact path="/admin/dashboard" component={Dashboard}/>
                <PrivateRoute exact path="/admin/:section" component={Dashboard}/>
                <PrivateRoute exact path="/admin/:section/:id" component={Dashboard}/>
                <PrivateRoute path="/private" component={Registration}/>
                <Route path="/registration" component={Registration} />
                <Route path="*" component={Page404} />
              </Switch>
            </div>
          </div>
        
        </Provider>
       </BrowserRouter>
      </div>
    );
  }
}
export default App;
