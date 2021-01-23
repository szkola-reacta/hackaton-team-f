import React from "react";
import Icon from "@material-ui/core/Icon";
import { Grid } from "@material-ui/core";

import "./styles.scss";

function IconBox({ icon, name, className }) {
  return (
    <Grid item xs={6} md={3} className={`iconBox ${className}`}>
      <Icon className="iconBox__icon">{icon}</Icon>
      <span className="iconBox__label">{name}</span>
    </Grid>
  );
}

export default IconBox;