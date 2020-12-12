import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Item from "../item/Item";
import {Zoom,Fade } from "react-reveal";
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
      <Fade bottom>
      <div>
        <ul> {itemsToRender}</ul>
        {item && (
          <Modal  isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <ItemModal className="modal" item={item} closeModal={this.closeModal} />
            </Zoom>
          </Modal>
        )}
      </div>
      </Fade>
    );
  }f
}
