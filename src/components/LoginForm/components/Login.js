import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";

function Login({ realUsers, LogIn }) {
  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    setError(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const currentUser = users.find(
      (user) =>
        (user.email === details.email && user.password === details.password) ||
        (user.accountName === details.email &&
          user.password === details.password)
    );
    if(currentUser) {
      LogIn(currentUser);
      localStorage.setItem("userState", true);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    setUsers(realUsers);
  }, [users]);

  return (
    <form className="Login" onSubmit={handleSubmit}>
      <div>
        <TextField
          name="email"
          value={details.email}
          label="Login or email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
          onChange={handleChange}
          {...(error && { error: true, helperText: "Incorrect email" })}
        />
        <TextField
          value={details.password}
          type="password"
          name="password"
          label="Password"
          pattern="[A-Za-z0-9]{8,16}"
          onChange={handleChange}
          {...(error && { error: true, helperText: "Incorrect password" })}
        />
      </div>
      <Button
        type="submit"
        variant="outlined"
        color="default"
        onSubmit={handleSubmit}
      >
        Sign in
      </Button>
    </form>
  );
}

export default Login;
