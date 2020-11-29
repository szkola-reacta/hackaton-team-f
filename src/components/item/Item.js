import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import formatCurrency from "../../utils";
import "./style.css";

export default class Item extends Component {
  render() {
    const { name, rating, imageUrl, startPrice} = this.props.data;
    return (
      <div className="offers">
        <img src={imageUrl} alt={name} />
        <div>
          <h1>{name} </h1>
          <StarRatingComponent name="rate1" starCount={10} value={rating} />
          <p>{`from ${formatCurrency(startPrice)}/ per night`}</p>
        </div>
      </div>
    );
  }
}
