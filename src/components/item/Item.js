import React, { Component } from "react";
import axios from "axios";
export default class Item extends Component {
  state = {
    name: null,
    email: null,
    address:{
      country: null,
      city: null,
      street: null,
      building: null,
    },
    id: null,
  };
  componentDidMount() {
    this.loadData(1);
  }
  loadData(id) {
    let itemUrl = `http://localhost:3001/offer?id=${id}`;
    let data;
    axios.get(itemUrl).then((response) => {
      data = response.data[0];
      console.log(data);
      this.setState({
        name: data.name,
        email:data.email,
        address:{
          country: data.address.country,
          city: data.address.city,
          street: data.address.street,
          building: data.address.building,
        }
      })
    });
  }
  render() {
    const {address} = this.state;
    return(
     <div className="offers">
    <h2>{address.country}</h2>
    <h2>{address.city}</h2>
    <h2>{address.street}</h2>
    <h2>{address.building}</h2>
    </div>
    )
  }
}
