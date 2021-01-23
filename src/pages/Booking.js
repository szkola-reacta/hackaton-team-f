import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CircularProgress from "@material-ui/core/CircularProgress";
import Gallery from "../components/Galery/Gallery";
import Page404 from "../pages/404";

function Booking() {
  const { slug } = useParams();
  const [link, setLink] = useState(slug);
  const [data, setData] = useState([]);
  const [item, setItem] = useState({});
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const loadData = async() => {
      const { data } = await axios.get("http://localhost:3001/offer");
      const result = [...data];
      setLoader(false);
      const newResult = result.filter((b) => b.friendlyUrl === link);
      if(newResult.length === 0) {
        return setError(true);
      }
      const nitem = { ...newResult[0] };
      const media = newResult[0].media;
      setItem(nitem);
      setData([...media]);
    };
    setLoader(false);
    loadData();
  }, [link]);

  useEffect(() => {
    setLink(slug);
  }, [slug]);

  if(error) {
    return <Page404/>;
  }
  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto 0 auto" }}>
      <span className="pageTitle">Booking</span>
      <div style={{ display:"flex" }}>
        <div style={{ width: "50%" }}>
          {loader ?
          <CircularProgress disableShrink />
          :
          <>
          <Gallery data={data} name={item.name} />
          </>
          }
        </div>
        <div style={{ width: "50%" }}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Booking;