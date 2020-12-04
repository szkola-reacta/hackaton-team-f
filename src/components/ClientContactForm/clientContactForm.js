import React from "react";
import "./style.css";
import ItemsForm from "../ItemsForm/itemsForm";

export default class ClientContactForm extends React.Component {
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
          <label>
            Temat
            <select>
              <option value="option1">Problem z bookingiem</option>
              <option value="option2">Zmiana terminu pobytu</option>
              <option selected value="option3">Problem z płatnościami</option>
            </select>
          </label>
          <ItemsForm header="Imie"/>
          <ItemsForm header="Nazwisko"/>
          <ItemsForm header="Adres email"/>
          <ItemsForm header="Telefon"/>
          <ItemsForm header="Wpisz wiadomość"/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
}