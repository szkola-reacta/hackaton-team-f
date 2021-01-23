import React, { useEffect, useState } from "react";
import { Person, KingBed, SingleBed } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import "./styles.scss";

function Room({ data: item }) {
  useEffect(() => {
    const loggedState = localStorage.getItem("userState");
    setUserState(loggedState);
  }, []);
  const [userState, setUserState] = useState(false);
  const persons = (persons) => {
    return [...Array(persons)].map((person, index) => (
      <Person key={index} fontSize={"small"} />
    ));
  };

  const beds = (beds) => {
    const bedsList = beds.split("+");
    return bedsList.map((bed, index) =>
      parseInt(bed) === 1 ? <SingleBed key={index} /> : <KingBed key={index} />
    );
  };

  return (
    <div className="room">
      <div className="room__header">
        <div className="room__persons">{persons(item.persons)}</div>
        <div className="room__type">{item.type}</div>
        <div className="room__beds">{beds(item.beds)}</div>
        <div className="room__actions">
          <Button
            type="submit"
            {...(!userState && { disabled: true })}
            variant="outlined"
            color="secondary"
          >
            Book now
          </Button>
          {/* <button className="btn btn--primary">Book now</button> */}
        </div>
      </div>
    </div>
  );
}

export default Room;
