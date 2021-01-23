import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Item from "../../item/Item";
import "../../UI/styles.scss";
import "../style.scss";
import CircularProgress from "@material-ui/core/CircularProgress";
export default class OfferList extends Component {
  openModal = (item) => {
    this.setState({ item });
  };

  closeModal = () => {
    this.setState({ item: null });
  };

  render() {
    const { offers } = this.props;
    let itemsToRender;
    if(offers) {
      itemsToRender = offers.map((offer) => {
        return (
          <li key={offer.id}>
            <NavLink to={`/booking/${offer.friendlyUrl}`}>
              <Item id={offer.id} data={offer} />
            </NavLink>
          </li>
        );
      });
    }
    return (
      <div className="OfferList">
        { offers ? <ul> {itemsToRender}</ul> : <CircularProgress color="secondary"/>}
    
      
      </div>
    );
  }
}
