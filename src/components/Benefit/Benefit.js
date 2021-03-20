import React from "react";
import api from "../../api";

function Benefit() {
  const handleSubmit = (e, data) => {
    e.preventDefault();
    const ndata = {
      id: 4,
      comment: e.target.test.value
    };
    api.post("comments", ndata);
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="test" value="tekst test"/>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default Benefit;