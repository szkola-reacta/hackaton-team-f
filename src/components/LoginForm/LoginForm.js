import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import { BrowserRouter, NavLink } from "react-router-dom";
import api from "../../api";
function LoginForm() {
  const element = "users";
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const handleEmailChange = (e) => { setLogin(e.target.value); setError(false); };
  const handlePasswordChange = (e) => { setPassword(e.target.value); setError(false); };
  const handleClick = () => console.log("Wyślij formularz rejestracji");
  const reset = () => {
    setError(true);
    setLogin("");
    setPassword("");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const currentUser = users.find(
      (user) =>
        (user.email === login && user.password === password) ||
        (user.accountName === login && user.password === password)
    );
     console.log(currentUser);
     // eslint-disable-next-line no-unused-expressions
     currentUser ?null :
     (reset());
  };

  useEffect(() => {
    let mounted = true;
    api.get(`${element}`).then((items) => {
      if(mounted) {
        setUsers(items);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <BrowserRouter>
    <form className="Login" onSubmit={handleSubmit}>
      <div>
        <TextField
          name="Login"
          value={login}
          label="Login or email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
          onChange={handleEmailChange}
          {... (error && { error: true, helperText:"Incorrect email" }) }
        />
        <TextField
          value={password}
          type="password"
          name="password"
          label="Password"
          pattern="[A-Za-z0-9]{8,16}"
          onChange={handlePasswordChange}
          {... (error && { error: true, helperText:"Incorrect password" }) }
        />
      </div>
      <Button
        type="submit"
        onClick={handleClick}
        variant="outlined"
        color="default"
        onSubmit={handleSubmit}
      >
        Sign in
      </Button>
      <NavLink to="/user">User</NavLink>
    </form>
    </BrowserRouter>
  );
}

export default LoginForm;
