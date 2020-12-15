import React from "react";
import "./style.css";

export default class ItemsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onChange: null,
    };
  }

  render() {
    const { type, name, placeholder, pattern } = this.props;
    return (
      <div>
        <input type={type} name={name} placeholder={placeholder} onChange={this.handleChange} pattern={pattern}  required />
      </div>
    );
  }
}