import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, IconButton, TextField } from "@material-ui/core";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import Modal from "react-modal";

const properData = {
  login: "admin",
  password: "admin",
};

function Admin() {
  const history = useHistory();
  const [isModalActive, setIsModalActive] = useState(true);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
 
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
      history.push("/admin/rooms");
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
    </div>
  );
}

export default Admin;
