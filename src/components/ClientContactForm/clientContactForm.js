import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function useInput(initialValue = "") {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return [value, handleChange];
}

function ClientContactForm() {
   const [handleNameChange] = useInput("");
   const [handleSurnameChange] = useInput("");
   const [handlePhoneChange] = useInput("");
   const [handleEmailChange] = useInput("");
   const [value, setValue] = React.useState("");
   const handleMessageChange = (event) => {
    setValue(event.target.value);
  };
  const handleClick = () => console.log("Wyślij formularz");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="Contact__contactForm" onSubmit={handleSubmit}>
      <div>
        <TextField
            required
            id="standard-required"
            label="Name"
            onChange={handleNameChange}
            inputProps={{ pattern: "[A-Za-z]{2,99}" }}
         />
        <TextField
            required
            id="standard-required"
            label="Surname"
            onChange={handleSurnameChange}
            inputProps={{ pattern: "[A-Za-z]{2,99}" }}
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          pattern="[0-9]{3}[0-9]{3}[0-9]{3}"
          inputProps={{ pattern: "^([+]?[\\s0-9]+)?(\\d{3}|[(]?[0-9]+[)])?([-]?[\\s]?[0-9])+$" }}
          onChange={handlePhoneChange}
        />
        <TextField
            required
            id="standard-required"
            label="Email"
            onChange={handleEmailChange}
            type="email"
            inputProps={{ pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$" }}
        />
        <TextField
          id="standard-multiline-flexible"
          label="Your message"
          multiline
          rowsMax={5}
          value={value}
          onChange={handleMessageChange}
          inputProps={{ pattern: "[A-Za-z]{2,99}" }}
        />
      </div>
      <Button
        type="submit"
        variant="outlined"
        color="default"
        onClick={handleClick}
      >
        Wyślij formularz
      </Button>
    </form>
  );
}
export default ClientContactForm;
