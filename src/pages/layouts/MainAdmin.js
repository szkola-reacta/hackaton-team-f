import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import api from "../../api";
import "./styles.scss";

function MainAdmin({ children }) {
  const [ menu, setMenu ] = useState([]);
  useEffect(() => {
    const getData = async() => {
      const apiData = await api.get("adminMenu");
      setMenu(apiData);
    };
    getData();
  }, []);

  return (
    <Container>
      <Grid container direction="row" wrap="nowrap">
        <Grid item>
          <ul className="admin-menu">
            {menu.map(item => (
              <li key={item.id} className="admin-menu__item">
                <NavLink
                  to={`/admin/${item.url}`}
                  className="admin-menu__link"
                  activeClassName="admin-menu__link--active"
                >
                  <Icon>{item.icon}</Icon>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </Grid>
        <Grid className="bgLight" xs={"true"}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}

export default MainAdmin;