import React from "react";
import ItemsForm from "../ItemsForm/itemsForm";

export default class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('Brak wypełnionych pól z danymi ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ItemsForm header="Adres email: "/>
        <ItemsForm header="Imie"/>
        <ItemsForm header="Nazwisko"/>
        <ItemsForm header="Hasło: "/>
        <ItemsForm header="Powtórz hasło: "/>
        <ItemsForm header="Nazwa konta"/>
        <ItemsForm header="Adres"/>
        <ItemsForm header="Kod pocztowy"/>
        <ItemsForm header="Telefon"/>
        <input type="submit" value="Register" />
      </form>
    );
  }
}