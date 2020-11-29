import React from 'react';
import OfferList from '../components/OfferList/OfferList';

function Homepage({data}) {
  return (
    <>
    <h3>New offers </h3>
    <OfferList data= {data}/>
    </>
  )
}

export default Homepage;