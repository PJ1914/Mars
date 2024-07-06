import React from 'react';
import './ShadowBox.css'; // Ensure to import the CSS file

export const ShadowBox = (props) => {
  return (
    <div className="shadow">
        <div>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
            <a href="your-link-here" className="shadow-button">Click Here</a>
        </div>
        <img src={props.img} alt="camera" />
    </div>
  )
}

