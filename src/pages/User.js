import React, { useState } from "react";
import LoginForm from "../components/LoginForm/containers/LoginForm";
import { Button } from "@material-ui/core";
function User() {
  const LogIn = details => {
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
    localStorage.setItem("userState", false);
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
      
      ):<LoginForm LogIn = {LogIn} />}
    </div>

  );
}

export default User;
