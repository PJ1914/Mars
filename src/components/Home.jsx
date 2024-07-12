import React, { useState, useEffect } from "react";
import "./Home.css";
import Footer from "./Footer";
import Navbar from "./home/Navbar";
import marsB from "../assets/mars.png";
import cameraCrew from "../assets/team.png";
import AevumJagat from "../assets/aevum jagat.jpg";
import mask1 from "../assets/D87A2067 3.png";
import mask2 from "../assets/Mask group-1.png";
import mask3 from "../assets/Mask group-2.png";
import mask4 from "../assets/Mask group-3.png";
import PeopleCard from "./home/PeopleCard";
import { ShadowBox } from "./home/ShadowBox";
import calleVapor from "../assets/image 8.png";
import meeMeemulu from "../assets/image 9.png";
import Data from "./personData/Data";
import UpcomingCard from "./home/UpcomingCard";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Footer from "./Common/Footer";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [clickPerson, setClickPerson] = useState(0);

  const carouselData = [
    {
      heading: "To Make timeless films intended for a better tomorrow",
      text: "Crafting Cinematic Dreams Where Stories Come to Life",
      img: cameraCrew,
    },
    {
      heading: "Here is the Aevum Jagat Video",
      text: "...",
      img: AevumJagat,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [carouselData.length]);

  function handlePerson(event) {
    const n = event.target.id;
    setClickPerson(+n);
  }

  return (
    <div className="container">
      <div className="box1">
        <img src={marsB} alt="Mars Image" />
        <div className="carousel-shadowbox">
          <TransitionGroup>
            <CSSTransition key={currentSlide} timeout={500} classNames="slide">
              <ShadowBox
                heading={carouselData[currentSlide].heading}
                text={carouselData[currentSlide].text}
                img={carouselData[currentSlide].img}
              />
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>

      <div className="people-container">
        <h1 id="head">PARTNER TESTIMONIALS</h1>
        <div className="people">
          <ul>
            <li onClick={handlePerson}>
              <img src={mask1} alt="m1" id="0" />
            </li>
            <li onClick={handlePerson}>
              <img src={mask2} alt="m2" id="1" />
            </li>
            <li onClick={handlePerson}>
              <img src={mask3} alt="m3" id="2" />
            </li>
            <li onClick={handlePerson}>
              <img src={mask4} alt="m4" id="3" />
            </li>
          </ul>
          <PeopleCard
            name={Data[clickPerson].name}
            sub={Data[clickPerson].sub}
            text={Data[clickPerson].text}
            img={Data[clickPerson].img}
          />
        </div>
      </div>

      <UpcomingCard />

      <div className="how-we-work">
        <h1>HOW WE WORK</h1>
        <div className="work-container">
          <p>
            Mars Movie Productions is designed to provide an end-to-end support
            to the Film Field Aspirants in any vertical of film making. We @
            Mars believe that the industry is in the dire need of the following
            precepts to bring in a new era. Transparency : Everything is kept
            open for the aspirants to see what is happening to them and their
            talents and resources. Nothing is hidden. One can see the stages of
            life cycle of their investment - be it money or talent or resource.
            Optimized process: Technology is developed to ensure that every
            effort is best shaped, resources optimally utilized, timelines kept,
            value-diminishing processes removed, and wastage minimized. Every
            nickel and every second an aspirant invests in his dream project
            here is put to the best use so much so that the marketable output of
            his investment is clearly visible.
          </p>
          <div className="project-cards">
            <div className="project-card">
              <img src={calleVapor} alt="Calle Vapor" />
              <p>Calle Vapor</p>
            </div>
            <div className="project-card">
              <img src={meeMeemulu} alt="Mee Meemulu" />
              <p>Mee Meemulu</p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up">
        <Footer></Footer>
      </div>
      
    </div>
  );
};

export default Home;
