import React from "react";
import clsx from "clsx";
import "./styles.scss";
import { Grid } from "@material-ui/core";

function List({ component: Component, data, className, column }) {
  return (
    <Grid container direction="row" wrap className={clsx(className, column ? "column" : "row", "list")}>
      {data.map((item, index) => (
        Component
        ? <Component key={index} data={item} className={className} {...item}/>
        :
            <li key={item.id} style={{ width: "100%", display: "flex", flexDirection: "row" }}>
            {console.log(item)}
              {Object.keys(item)
                .map(key => (
                  <div>{item[key]}</div>
                ))
              }
            </li>
          
      ))}
    </Grid>
  );
}

export default List;