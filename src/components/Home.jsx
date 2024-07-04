// src/components/Home.jsx
import React from "react";
import "./Home.css";
import { Navbar } from "./home/Navbar";
import marsImage from "../assets/marsp.png";
import cameraCrew from "../assets/team.png";
import marsB from "../assets/mars.png";
// import Pic from "../assets/Mask group.png";
// import mask1 from "../assets/D87A2067 3.png";
// import mask2 from "../assets/Mask group-1.png";
// import mask3 from "../assets/Mask group-2.png";
// import mask4 from "../assets/Mask group-3.png";
import PeopleCard from "./home/PeopleCard";
import { ShadowBox } from "./home/ShadowBox";
const Home = () => {
  return (
    <div className="container">
        <Navbar/>
        <div className="box1">
          <img src={marsB} alt="Mars Image" />
         <ShadowBox heading={"To  Make   timeless films  intended  for better  tomorrow"} text={"Crafting Cinematic Dreams Where Stories Come to Life"} img={cameraCrew}/>
        </div>
        

    </div>

    
  );
};

export default Home;
