import React from 'react';
// import './ShadowBox.css';
export const ShadowBox = (props) => {
  return (
    <div className="shadow">
        <div>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
            <h2>Visit last project</h2>
        </div>
        <img src={props.img} alt="camera" />
    </div>
  )
}
