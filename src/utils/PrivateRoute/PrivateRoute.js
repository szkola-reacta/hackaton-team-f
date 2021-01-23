import React from "react";
import { Route, Redirect } from "react-router-dom";
import MainAdmin from "../../pages/layouts/MainAdmin";

function PrivateRoute({ component: Component, ...rest }) {
  const isLogin = true;
  return (
    <Route {...rest} render={() => (
      isLogin === true
      ? <MainAdmin><Component/></MainAdmin>
      : <Redirect to="/login"/>
    )}/>
  );
}

export default PrivateRoute;