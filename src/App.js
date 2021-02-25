import React, { useState } from "react";
import "./App.scss";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Search from "./pages/Search";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import Booking from "./pages/Booking";
import Admin from "./pages/Admin";
import LoginForm from "./components/LoginForm/LoginForm";
import Offers from "./components/OfferList/containers/Offers";
import Registration from "./pages/Registration";
import Page404 from "./pages/404";
import Dashboard from "./pages/admin/Dashboard";
import GlobalNavigation from "./GlobalNavigation";
import store from "./store";


const App = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => { setAnchorEl(e.currentTarget); };
  const handleClose = () => { setAnchorEl(null); };
 // const user = useSelector(selectUser);
  // console.log("user ->", user);
  return (
    <div>
      <BrowserRouter>
        <Provider store = {store}>
        <div className="App">
            <div className="background"></div>
            <GlobalNavigation handleClick={handleClick} handleClose = {handleClose} anchorEl={anchorEl} />
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
              <Route path="/login" component={LoginForm} />
              <Route exact
                path="/admin"
                component={() => (
                  <Admin/>
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
        </Provider>
      </BrowserRouter>
    </div>
  );
};
export default App;
