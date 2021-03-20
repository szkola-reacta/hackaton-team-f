import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import Gallery from "../components/Galery";
import Page404 from "../pages/404";
import { Comment } from "../components/Comments";
import Room from "../components/Room";
import List from "../components/List";
import { Container, Grid, Typography } from "@material-ui/core";
import IconBox from "../components/IconBox";

function Booking() {
  const { slug } = useParams();
  const [data, setData] = useState([]);
  const [item, setItem] = useState({});
  const [error, setError] = useState(false);
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    const benefitsData = [];
    const getBenefits = async(id) => {
      const data = await api.get(`advantages/?id=${id}`);
      benefitsData.push(data.shift());
    };
    const loadData = async() => {
      const data = await api.get(`offer/?friendlyUrl=${slug}&_embed=comments&_embed=rooms`);
      if(!data.length) {
        return setError(true);
      }
      const result = data.shift();

      if(result.advantages) {
        for(let element of result.advantages) {
          await getBenefits(element);
        }
      }
      setItem({ ...result });
      setData([...result.media]);
      setBenefits([...benefitsData]);
    };
    loadData();
  }, [slug]);

  if(error) {
    return <Page404/>;
  }
  return (
    <Container fixed>
      <Grid direction="row" justify="space-between" container className="bgMain titleHeader">
        <Typography variant="span" className="ligthTitle">Booking</Typography>
        <Typography variant="h1" style={{ fontSize: "2em", fontStyle: "italic" }} className="colorLight">{item.name}</Typography>
      </Grid>
      <Grid container xs={12} lg={12}>
        <Grid item xs={12} lg={6}>
          <Gallery data={data} name={item.name} />
        </Grid>
        <Grid container xs={12} lg={6} alignContent="space-between" className="fade80">
          <Grid xs={12}>
          <h5 align="left" className="titleHeader colorMainDark ligthTitle">
            Description
          </h5>
          <Typography variant="body2" className="box">
            {item.description}
          </Typography>
          </Grid>
          <Grid container xs={12} style={{ minHeight: "120px" }}>
            <List className="benefits" component={IconBox} data={benefits}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <List column className="comments" component={Comment} data={item.comments ? item.comments : []}/>
        </Grid>
        <Grid xs={12}>
          <List column className="rooms" component={Room} data={item.rooms ? item.rooms : []}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Booking;