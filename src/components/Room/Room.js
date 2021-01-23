import React from "react";
import { Person, KingBed, SingleBed } from "@material-ui/icons";
import "./styles.scss";

function Room({ data: item }) {
  const persons = (persons) => {
    return [...Array(persons)].map((person, index) => (
      <Person key={index} fontSize={"small"}/>
    ));
  };

  const beds = (beds) => {
    const bedsList = beds.split("+");
    return bedsList.map((bed, index) => (
      parseInt(bed) === 1 ? <SingleBed key={index}/> : <KingBed key={index}/>
    ));
  };

  return (
    <div className="room">
      <div className="room__header">
        <div className="room__persons">
          {persons(item.persons)}
        </div>
        <div className="room__type">{item.type}</div>
        <div className="room__beds">
          {beds(item.beds)}
        </div>
        <div className="room__actions">
          <button className="btn btn--primary">Book now</button>
        </div>
      </div>
    </div>
  );
}

export default Room;