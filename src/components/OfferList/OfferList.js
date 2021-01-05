import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Item from "../item/Item";
import { Zoom } from "react-reveal";
import Modal from "react-modal";
import ItemModal from "../ItemModal/ItemModal";
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
    if(data) {
      itemsToRender = data.map((item) => {
        return (
          <li key={item.id}>
            <NavLink
              to={`/booking/${item.friendlyUrl}`}
            >
              <Item id={item.id} data={item} />
            </NavLink>
          </li>
        );
      });
    }
    return (
      <div>
        <ul> {itemsToRender}</ul>
        {item && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <ItemModal className="modal" item={item} closeModal={this.closeModal} />
            </Zoom>
          </Modal>
        )}
      </div>
    );
  }
}
