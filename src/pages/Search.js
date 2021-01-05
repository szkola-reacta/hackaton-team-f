import React from "react";
import { Container, Typography } from "@material-ui/core";

import Searching from "../components/Searching/Searching";

function Search() {
  return (
    <Container>
      <Typography variant='h3' className='title' gutterBottom>
        let's <span className='bolder'>find some place</span> for you
      </Typography>
      <Searching/>
    </Container>
  );
}

export default Search;