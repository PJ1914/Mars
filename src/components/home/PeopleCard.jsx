import React from "react";
import './peopleCard.css';

export default function PeopleCard(props){
    return(
        <div className="nextpage">
        <div className="card-2">
          <img src={props.img} alt="Dinakar" className="pic-dina" />
        </div>
      
    </div>
    );
}
