// src/components/Home.jsx
import React,{useState} from "react";
import "./Home.css";
import { Navbar } from "./home/Navbar";
import marsImage from "../assets/marsp.png";
import cameraCrew from "../assets/team.png";
import marsB from "../assets/mars.png";
// import Pic from "../assets/Mask group.png";
import mask1 from "../assets/D87A2067 3.png";
import mask2 from "../assets/Mask group-1.png";
import mask3 from "../assets/Mask group-2.png";
import mask4 from "../assets/Mask group-3.png";
import PeopleCard from "./home/PeopleCard";
import { ShadowBox } from "./home/ShadowBox";
import Data from "./personData/Data";



const Home = () => {
  const [clickPerson,setClickPerson] = useState(0);

  function handlePerson(event){
    const n = event.target.id;
    setClickPerson(+n); // to convert string into integer
    // console.log(n);
  }


  return (
    <div className="container">
        <Navbar/>
        <div className="box1">
          <img src={marsB} alt="Mars Image" />
         <ShadowBox heading={"To  Make   timeless films  intended  for better  tomorrow"} text={"Crafting Cinematic Dreams Where Stories Come to Life"} img={cameraCrew}/>
        </div>
        <h1>PARTNER TESTIMONALS</h1>
        <div className="people">
          
          
          <ul>
            <li  onClick={handlePerson}><img src={mask1} alt="m1" id="0"/></li>
            <li  onClick={handlePerson}><img src={mask2} alt="m2" id="1"/></li>
            <li  onClick={handlePerson}><img src={mask3} alt="m3" id="2"/></li>
            <li  onClick={handlePerson}><img src={mask4} alt="m4"  id= "3"/></li>
          </ul>
          
          <PeopleCard name={Data[clickPerson].name} sub={Data[clickPerson].sub} text={Data[clickPerson].text} img={Data[clickPerson].img}/>
        </div>


    </div>

    
  );
};

export default Home;
