import React from "react";
import './peopleCard.css';

export default function PeopleCard(props){
    return(
      <div className="card-2">
      <div className="text">
      <h1>{props.name}</h1>
      <h4>{props.sub}</h4>
      <p>{props.text}</p>
      </div>
      <img src={props.img} alt="photo" />
    </div>
    );
}
