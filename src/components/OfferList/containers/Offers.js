import React, { Component } from "react";
import { connect } from "react-redux";

import OffersList from "../containers/Offers";
import { fetchOffers } from "../redux";

class Offers extends Component {
  state = {
    offers:[]
  };

  fetchData= () => {
    this.props.fetchOffers();
  };

  render() {
    const { offers, isLoading } = this.props;
    return (
      <div className="container">
        <h2>Offers</h2>
        {isLoading && <p>Loading...</p>}
        <button onClick={this.fetchData}>Fetch Offers</button>
        <OffersList offers={offers} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  offers: state.offers.offers,
   isLoading: state.offers.isLoading,
   isError: state.offers.isError
});

const mapDispatchToProps = dispatch => ({
  fetchOffers: () => dispatch(fetchOffers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Offers);