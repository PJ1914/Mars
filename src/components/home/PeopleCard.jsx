import React from "react";
import './peopleCard.css';

export default function PeopleCard({ name, sub, text, img }) {
    return (
        
            <div className="card-2">
                <div>
                    <h2>{name}</h2>
                    <h3>{sub}</h3>
                    <p>{text}</p>
                </div>
                <img src={img} alt={name} className="pic-dina" />
            </div>
        
    );
}
