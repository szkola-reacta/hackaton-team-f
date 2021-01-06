import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./App.css";
import api from "./api";
import Search from "./views/Search";
import Contact from "./views/Contact";
import Homepage from "./views/Homepage";
import Booking from "./views/Booking";
import Admin from "./views/Admin";
import OfferList from "./components/OfferList/OfferList";
import Registration from "./pages/Registration";
import Page404 from "./pages/404";

class App extends Component {
  constructor() {
    super()
    this.state = {
      offer: null,
      bookings: null,
    };
    this.loadBookings = this.loadBookings.bind(this);
  }

  componentDidMount() {
    this.loadOffer();
    this.loadBookings();
  }

  load(element) {
    let el;
    api.get(`${element}`)
    .then((response) => {
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
    const { offer, bookings } = this.state;
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
                  <NavLink to="/registration">Registration</NavLink>
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
                <Route path={["/search", "/search/:query"]} component={Search} />
                <Route path="/booking/:slug" component={Booking} />                
                <Route
                  path="/admin"
                  component={() => (
                    <Admin
                      bookings={bookings}
                      reloadData={() => this.loadBookings()}
                    />
                  )}
                />
                <Route path="/registration" component={Registration}/>
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
