import React, { Component } from "react";
import axios from "axios";
export default class Item extends Component {
  state = {
    name: null,
    email: null,
    city: null,
    country: null,
    adress: null,
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
    });
  }
  render() {
    return <div className="offers">test2</div>;
  }
}
