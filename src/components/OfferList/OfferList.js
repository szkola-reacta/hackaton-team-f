import React, { Component } from "react";
import Item from '../item/Item';
export default class OfferList extends Component {
  state = {
    isActive: true,
    direction: "left",
    position: {
      top: 500,
      left: 200,
    },
  };
  render() {
    return (
      <div  className="offers">
       <Item/>
      </div>
    );
  }
}

