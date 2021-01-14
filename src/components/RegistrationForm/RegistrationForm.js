import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return [value, handleChange];
}

function RegistrationForm() {
  const [handleNameChange] = useInput("");
  const [handleSurnameChange] = useInput("");
  const [handlePhoneChange] = useInput("");
  const [handleEmailChange] = useInput("");
  const [handlePasswordChange] = useInput("");
  const [handleNameAccountChange] = useInput("");
  const [handleAdressChange] = useInput("");
  const [handlePostCodeChange] = useInput("");

  const handleClick = () => console.log("Wyślij formularz rejestracji");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="Registration" onSubmit={handleSubmit}>
        <div>
        <TextField
        required
        name="name"
        label="Name"
        onChange={handleNameChange}
        pattern="[A-Za-z]{2,99}"
      />
      <TextField
        required
        name="surname"
        label="Surname"
        onChange={handleSurnameChange}
        pattern="[A-Za-z]{2,99}"
      />
      <TextField
        name="email"
        label="Email"
        onChange={handleEmailChange}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
      />
      <TextField
        name="password"
        label="Password"
        onChange={handlePasswordChange}
        pattern="[A-Za-z0-9]{8,16}"
      />
      <TextField
        name="account_name"
        label="Account name"
        onChange={handleNameAccountChange}
        pattern="[A-Za-z]{2,99}"
      />
      <TextField name="address" label="Address" onChange={handleAdressChange} />
      <TextField
        name="postcode"
        label="Postcode"
        onChange={handlePostCodeChange}
      />
      <TextField
        type="number"
        name="phone"
        label="Phone"
        onChange={handlePhoneChange}
        pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
      />
        </div>
   
      <Button
        type="submit"
        onClick={handleClick}
        variant="outlined"
        color="default"
      >
        Registration
      </Button>
    </form>
  );
}

export default RegistrationForm;
