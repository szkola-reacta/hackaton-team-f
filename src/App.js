import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import "./App.css";
import axios from "axios";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Booking from "./pages/Booking";
import OfferList from "./components/OfferList/OfferList";
import Registration from "./pages/Registration";
import Page404 from "./pages/404";

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    let itemUrl = "http://localhost:3001/offer";
    let data;
    axios.get(itemUrl).then((response) => {
      data = response.data;
      this.setState({
        data: data,
      });
    });
  }

  render() {
    const { data } = this.state;
    return (
      // <Fade top>
      <div>
        <BrowserRouter>
          <div className="App">
            <div className="background"></div>
            <header className="App-header">
              <ul className='App-menu'>
                <li className='App-menu__item'><NavLink to='/dashboard'>Start</NavLink></li>
                <li className='App-menu__item'><NavLink to='/search'>Search</NavLink></li>
                <li className='App-menu__item'><NavLink to='/booking'>Booking</NavLink></li>
                <li className='App-menu__item'><NavLink to='/contact'>Contact</NavLink></li>
                <li className='App-menu__item'><NavLink to='/registration'>Registration</NavLink></li>
              </ul>
            </header>
            <div>
              <Switch>
                <Route exact path={["/dashboard", "/"]} component={Homepage} />
                <Route
                  path="/offer"
                  component={() => <OfferList data={data} />}
                />
                <Route path="/contact" component={Contact} />
                <Route path="/search/:query" component={Search} />
                <Route path="/booking/:slug" component={Booking} />
                <Route path='/registration' component={Registration}/>
                <Route path="*" component={Page404} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
      // </Fade>
    );
  }
}
export default App;
