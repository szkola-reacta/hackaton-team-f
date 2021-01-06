import React, { useState } from "react";
import ItemsForm from "../ItemsForm/itemsForm";

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
  const [handleMessageChange] = useInput("");

  const handleClick = () => console.log("Wyślij formularz");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <ItemsForm type="text" name="name" placeholder="Imie" onChange={handleNameChange} pattern="[A-Za-z]{2,99}" />
      <ItemsForm type="text" name="surname" placeholder="Nazwisko" onChange={handleSurnameChange} pattern="[A-Za-z]{2,99}" />
      <ItemsForm type="text" name="email" placeholder="Adres email" onChange={handleEmailChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" />
      <ItemsForm type="text" name="phone" placeholder="Numer telefonu" onChange={handlePhoneChange} pattern="[0-9]{3}[0-9]{3}[0-9]{3}" />
      <ItemsForm type="text" name="message" placeholder="Twoja wiadomość" onChange={handleMessageChange} pattern="[A-Za-z]{2,99}" />
      <button type="submit" onClick={handleClick}>Wyślij formularz</button>
    </form>
  );
}
export default ClientContactForm;
