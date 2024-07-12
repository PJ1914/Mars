import React from "react";
import "./peopleCard.css";

export default function PeopleCard({ name, sub, text, img }) {

  return (
    <div className="nextpage">
      <div className="card-2">
        <div className="peopleleft-card">
          <h2>{name}</h2>
          <h3>{sub}</h3>
          <p>{text}</p>
        </div>
        <div className="peopleright-card">
          <img src={img} alt={name} className="pic-dina" />
        </div>
      </div>
    </div>
  );

}
