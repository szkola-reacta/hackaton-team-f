import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, IconButton, TextField } from "@material-ui/core";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import Modal from "react-modal";
import api from "../api";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#177e89",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const properData = {
  login: "admin",
  password: "admin",
};

function Admin() {
  const history = useHistory();
  const [isModalActive, setIsModalActive] = useState(true);
  const [table, setTable] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const element = "bookings";

  useEffect(() => {
    let el;
    api.get(`${element}`).then((response) => {
      el = response;
    });
    return function() {
      setBookings(el);
    };
  }, [isModalActive]);

  let tableBody =
    bookings &&
    bookings.map((row) => (
      <StyledTableRow key={row.name}>
        <StyledTableCell component="th" scope="row" align="center">
          {row.bookingID}
        </StyledTableCell>
        <StyledTableCell align="center">{row.id}</StyledTableCell>
        <StyledTableCell align="center">{row.clientID}</StyledTableCell>
        <StyledTableCell align="center">{row.name}</StyledTableCell>
        <StyledTableCell align="center">{row.email}</StyledTableCell>
        <StyledTableCell align="center">{row.CheckIn}</StyledTableCell>
        <StyledTableCell align="center">{row.CheckOut}</StyledTableCell>
        <StyledTableCell align="center">{row.Nights}</StyledTableCell>
      </StyledTableRow>
    ));
  const handleChange = e => {
    const { target: { name, value }} = e;
    { name === "login" ? setLogin(value) : setPassword(value); }
  };
  const handleBack = () => {
    history.goBack();
  };
  const { handleSubmit } = useForm();
  const onSubmit = () => {
    if((login === properData.login) && (password === properData.password)) {
      setIsModalActive(false);
      setTable(true);
    } else {
    }
  };

  return (
    <div className="Component Admin__Component">
      <Modal className="Admin__ComponentModal" isOpen={isModalActive} ariaHideApp={false}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            required
            name="login"
            label="Login"
            onChange={handleChange}
          />
          <TextField
            required
            name="password"
            type="password"
            label="Password"
            onChange={handleChange}
          />
          <Button type="submit" variant="outlined" color="default">
            Zaloguj się
          </Button>
          <IconButton className="Admin__back" color="default" aria-label="back" component="span" onClick={handleBack}>
          <ArrowBackRoundedIcon />
        </IconButton>
        </form>
      </Modal>
      <div className="Admin">
        <span className="pageTitle">Admin Panel</span>
        {table ? (
          <TableContainer className="Admin__bookingTable" component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell>Booking ID</StyledTableCell>
                  <StyledTableCell align="center">Hotel ID</StyledTableCell>
                  <StyledTableCell align="center">Client ID</StyledTableCell>
                  <StyledTableCell align="center">Name</StyledTableCell>
                  <StyledTableCell align="center">Email</StyledTableCell>
                  <StyledTableCell align="center">Check In </StyledTableCell>
                  <StyledTableCell align="center">Check Out</StyledTableCell>
                  <StyledTableCell align="center">Nights</StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>{tableBody}</TableBody>
            </Table>
          </TableContainer>
        ) : null}
      </div>
    </div>
  );
}

export default Admin;