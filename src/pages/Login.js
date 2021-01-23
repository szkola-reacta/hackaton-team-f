import React, { useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import { Button } from "@material-ui/core";
function Login() {
  const Login = details => {
    setUser({
      email: details.email,
      password: details.password
    });
  };
  const Logout = () => {
    setUser({
      email: "",
      password: ""
    });
  };
  const [user, setUser] = useState({ email:"", password: "" });
  return (
    <div>
      {user.email !== "" ? (
      <div>
        Welcome {user.email}
        <Button
        onClick={Logout}
        variant="outlined"
        color="default"
      >
     Logout
      </Button>
      </div>
      
      ):<LoginForm Login = {Login}/>}
    </div>

  );
}

export default Login;
