// src/components/Home.jsx
import React from "react";
import "./Home.css";
import marsImage from "../assets/marsp.png";
import cameraCrew from "../assets/team.png";
import marsB from "../assets/mars.png";
import Pic from "../assets/Mask group.png";
import mask1 from "../assets/D87A2067 3.png";
import mask2 from "../assets/Mask group-1.png";
import mask3 from "../assets/Mask group-2.png";
import mask4 from "../assets/Mask group-3.png";


const Home = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About us</a></li>
          <li><a href="#projects">Project</a></li>
          <li><a href="#partner">Partner</a></li>
          <li><a href="#hu">Human on Mars</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#tech">Technology</a></li>
        </ul>
      </nav>
      <div className="background">
        <img src={marsB} alt="Mars Back" className="mars-back" />
        <div className="card">
          <h2 className="card-title">
            To  Make   timeless<br />
            films  intended  for<br />
            better  tomorrow
          </h2>
          <p className="card-description">Crafting Cinematic Dreams Where Stories Come to Life</p>
          <a href="#" className="card-link">View Last Project</a>
          <img src={marsImage} alt="Mars" className="mars-image" />
          <img src={cameraCrew} alt="Camera Crew" className="camera-crew" />
        </div>
      </div>


      <div className="nextpage">
        <div className="card-2">
          <img src={Pic} alt="Dinakar" className="pic-dina" />
          <img src={mask1} alt="mask-1" className="Mask-1" />
          <img src={mask2} alt="mask-2" className="Mask-2" />
          <img src={mask3} alt="mask-3" className="Mask-3" />
          <img src={mask4} alt="mask-4" className="Mask-4" />
        </div>
      </div>


      <div className="About-Mars">
        <p></p>
      </div>

      <div>
        © 2024 Mars Productions. All rights reserved.
      </div>
            
        
    </div>

    
  );
};

export default Home;
