import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { NavLink } from "react-router-dom";
import Item from "../item/Item";
import { Fade, Zoom } from "react-reveal";
import Modal from "react-modal";
import "./style.css";

export default class OfferList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
    };
  }
  openModal = (item) => {
    this.setState({ item });
  };
  closeModal = () => {
    this.setState({ item: null });
  };
  render() {
    const { data } = this.props;
    const { item } = this.state;
    let itemsToRender;
    if (data) {
      itemsToRender = data.map((item) => {
        return (
          <li>
            <NavLink
              to={`#${item.friendlyUrl}`}
              onClick={() => this.openModal(item)}
            >
              <Item id={item.id} data={data[item.id - 1]} />
            </NavLink>
          </li>
        );
      });
    }
    return (
      <div>
        <Fade bottom cascade>
          <ul> {itemsToRender}</ul>
        </Fade>
        {item && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <div>
                <button onClick={this.closeModal}>x</button>
                <div classname="offer">
                  <img src={item.imageUrl} alt={item.name} />
                  <h1> {item.name}</h1>
                  <StarRatingComponent
                    name="rate1"
                    starCount={10}
                    value={item.rating}
                  />
                  <p> {item.description} </p>
                  <span>
                    Address : {item.address.country},{item.address.city},
                    {item.address.street} {item.address.building}
                  </span>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
