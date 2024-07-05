import React from "react";
import './peopleCard.css';

export default function PeopleCard({ name, sub, text, img }) {
    return (
        <div className="nextpage">
            <div className="card-2">
                <img src={img} alt={name} className="pic-dina" />
                <h2>{name}</h2>
                <h3>{sub}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
}
