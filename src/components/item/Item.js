import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { formatCurrency, truncate } from "../../utils";
import "./style.css";

export default class Item extends Component {
  render() {
    const { name, description, rating, imageUrl, startPrice } = this.props.data;
    console.log(description)
    return (
      <div className="offer">
        <img src={imageUrl} alt={name} />
        <div className="offer__description">
          <span className="title">{name} </span>
          <StarRatingComponent name="rate1" starCount={5} value={Number(rating)} />
          <div className="shortDescription">
            <span>Description : </span>
            <p style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
              {truncate(`${description}`)}
            </p>
          </div>
          <p>{`from ${formatCurrency(startPrice)}/ per night`}</p>
        </div>
      </div>
    );
  }
}
