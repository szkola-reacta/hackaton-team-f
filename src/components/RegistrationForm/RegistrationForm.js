import React, { useState } from 'react';
import ItemsForm from "../ItemsForm/itemsForm";

function useInput(initialValue = '') {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return [value, handleChange];
}

function RegistrationForm() {
  const [handleNameChange] = useInput('');
  const [handleSurnameChange] = useInput('');
  const [handlePhoneChange] = useInput('');
  const [handleEmailChange] = useInput('');
  const [handlePasswordChange] = useInput('');
  const [handleNameAccountChange] = useInput('');
  const [handleAdressChange] = useInput('');
  const [handlePostCodeChange] = useInput('');

  const handleClick = () => console.log('Wyślij formularz rejestracji');
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <ItemsForm type="text" name="name" placeholder="Imie" onChange={handleNameChange} pattern="[A-Za-z]{2,99}" />
      <ItemsForm type="text" name="surname" placeholder="Nazwisko" onChange={handleSurnameChange} pattern="[A-Za-z]{2,99}"  />
      <ItemsForm type="text" name="email" placeholder="Adres email" onChange={handleEmailChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" />
      <ItemsForm type="text" name="password" placeholder="Hasło" onChange={handlePasswordChange} pattern="[A-Za-z0-9]{8,16}" />
      <ItemsForm type="text" name="name" placeholder="Nazwa konta" onChange={handleNameAccountChange} pattern="[A-Za-z]{2,99}" />
      <ItemsForm type="text" name="address" placeholder="Adres" onChange={handleAdressChange} />
      <ItemsForm type="text" name="postcode" placeholder="Kod pocztowy" onChange={handlePostCodeChange} />
      <ItemsForm type="text" name="phone" placeholder="Numer telefonu" onChange={handlePhoneChange} pattern="[0-9]{3}[0-9]{3}[0-9]{3}" />
      <button type="submit" onClick={handleClick}>Rejestracja</button>
    </form>
  );
}

export default RegistrationForm;