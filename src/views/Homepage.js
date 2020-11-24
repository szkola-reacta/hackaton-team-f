import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import OfferList from '../components/OfferList/OfferList';
import Searching from '../components/Searching/Searching';

function Homepage() {
  return (
    <>
    <Container>
      <Typography variant='h3' className='title' gutterBottom={true}>
        <span className='bolder'>Where</span> do you want <span className='bolder'>to go?</span></Typography>
      <Searching/>
    </Container>
    <Container className='theme-bg' maxWidth={false}>
      <Typography variant='h4' className='title'><span className='bolder'>New</span> offers</Typography>
      <OfferList/>
    </Container>
    </>
  )
}

export default Homepage;