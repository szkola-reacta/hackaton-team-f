import React from "react";
import { Button, TextField } from "@material-ui/core";


function RegistrationForm() {
  return (
    <form className="Registration">
        <div>
        <TextField
        required
        name="name"
        label="Name"
        inputProps={{ pattern: "[A-Za-z\\s]{2,99}" }}
      />
      <TextField
        required
        name="surname"
        label="Surname"
        inputProps={{ pattern: "[A-Za-z\\s]{2,99}" }}
      />
      <TextField required
        name="email"
        label="Email" inputProps={{ pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$" }}
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        pattern="[A-Za-z0-9]{8,16}"
        inputProps={{ pattern: "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$" }}
      />
      <TextField
        name="account_name"
        label="Account name"
        inputProps={{ pattern: "^[a-zA-Z0-9_.-]*$" }}
      />
      <TextField name="address" label="Address" inputProps={{ pattern: "^[a-zA-Z0-9_.-\\s]*$" }}/>
      <TextField
        type="number"
        name="phone"
        label="Phone"
        inputProps={{ pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$" }}
      />
        </div>
   
      <Button
        type="submit"
        variant="outlined"
        color="default"
      >
        Sign up
      </Button>
    </form>
  );
}

export default RegistrationForm;
