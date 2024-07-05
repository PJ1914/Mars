import React from 'react';
import './UpcomingCard.css';

const UpcomingCard = ({ title, description, img }) => {
  return (
    <div className="upcoming-card">
      <img src={img} alt="Upcoming" className="upcoming-img" />
      <div className="upcoming-text">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default UpcomingCard;
