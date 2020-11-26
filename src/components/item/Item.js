import React, { Component } from "react";
import './style.css';

export default class Item extends Component {
  render() {
    const {address,imageUrl} = this.props.data;
    return(
     <div className="offers" style ={{ backgroundImage:`url(${(imageUrl)})`}}>
    <h2>{address.country}</h2>
    <h2>{address.city}</h2>
    <h2>{address.street}</h2>
    <h2>{address.building}</h2>
    </div>
    )  
  }
}
