import React from "react";
import "./style.css";

export default class ItemsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Brak wypełnionych pól z danymi ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const { header } = this.props;
    return (
      <p>
        <label>
          {header}
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </p>
    );
  }
}