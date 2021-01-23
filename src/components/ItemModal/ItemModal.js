import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { formatCurrency } from "../../utils";
import RoomIcon from "@material-ui/icons/Room";
import Gallery from "../Galery/Gallery";
import "./style.scss";

export default class ItemModal extends Component {
  render() {
    const { item, closeModal } = this.props;
    const {
      name,
      startPrice,
      rating,
      description,
      address,
      email,
      media
    } = item;
    return (
      <div className="item">
        <button className="item__close" onClick={closeModal}>
          x
        </button>
        <div classname="offer">
          <Gallery data={media} name={name}/>
          <p className="item__title"> {name}</p>
          <p className="item__price">{`from ${formatCurrency(startPrice)}/ per night`}</p>
          <StarRatingComponent name="rate1" starCount={5} value={rating} />
          <p className="item__description"> {description} </p>
          <div className="item__address">
            <RoomIcon className="item__address--icon" />
            <a target="_blank" className="item__address--url" href={`http://maps.google.com/?q=${address.city} ${address.country}, ${address.zip}`}>
              {address.zip}, {address.city}, {address.country}
            </a>
          </div>
        </div>
        <div className="item__buttons">
          <a target="_blank" href={`mailto:${email}?subject=${name} Booking`}>Send email</a>
        </div>
      </div>
    );
  }
}
