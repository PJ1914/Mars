import React from "react";
import './peopleCard.css';

export default function PeopleCard(props){
    return(
        <div className="nextpage">
        <div className="card-2">
          <img src={PeopleCard} alt="Dinakar" className="pic-dina" />
          {/*<img src={mask1} alt="mask-1" className="Mask-1" /> 
          <img src={mask2} alt="mask-2" className="Mask-2" />
          <img src={mask3} alt="mask-3" className="Mask-3" />
          <img src={mask4} alt="mask-4" className="Mask-4" /> */}
        </div>
      <img src={props.img} alt="photo" />
    </div>
    );
}
