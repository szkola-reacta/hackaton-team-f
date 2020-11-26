import React, { Component } from "react";

import './style.css';
import Item from "../item/Item";
export default class OfferList extends Component {
  state = {
    data: null,
  };
  // componentDidMount() {
  //   this.loadData();
  // }
  // loadData() {
  //   // todo : zamienic na propsy
  //   let itemUrl = `http://localhost:3001/offer`;
  //   let data;
  //   axios.get(itemUrl).then((response) => {
  //     data = response.data;
  //     this.setState({
  //       data: data,
  //     });
  //   });
  // }
  render() {
    const { data } = this.props;
    let itemsToRender;
    if (data) {
      itemsToRender = data.map((item) => {
        return (
          <li>
             <Item id={item.id} data={data[(item.id)-1]} />
          </li>
       
        );
      });
    }
    return <ul>{itemsToRender}</ul>;
  }
}
