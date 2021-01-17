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
        pattern="[A-Za-z]{2,99}"
      />
      <TextField
        required
        name="surname"
        label="Surname"
        pattern="[A-Za-z]{2,99}"
      />
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
      <TextField
        name="account_name"
        label="Account name"
        pattern="[A-Za-z]{2,99}"
      />
      <TextField name="address" label="Address" />
      <TextField
        name="postcode"
        label="Postcode"
      />
      <TextField
        type="number"
        name="phone"
        label="Phone"
        pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
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
