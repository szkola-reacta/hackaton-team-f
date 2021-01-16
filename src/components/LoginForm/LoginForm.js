import React from "react";
import { Button, TextField } from "@material-ui/core";


function LoginForm() {
  const handleClick = () => console.log("Wyślij formularz rejestracji");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="Login" onSubmit={handleSubmit}>
        <div>
      <TextField
        name="email"
        label="Email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
      />
      <TextField
        name="password"
        label="Password"
        pattern="[A-Za-z0-9]{8,16}"
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
    </form>
  );
}

export default LoginForm;
