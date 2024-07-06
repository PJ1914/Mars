import React from "react";
import "./UpcomingCard.css";
import UpcomingImg1 from "../../assets/upcomg.png";
import { Link } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const UpcomingCard = () => {
  return (
    <div className="upcoming-conatiner">
      <h1>Up Coming</h1>
      <div className="upcoming-section">
        <div className="upcoming-leftcard">
          <img src={UpcomingImg1} alt="" />
          <div className="upcoming-content">
            <h2>Streaming on Aevumjagut</h2>
            <Link to="#" className="visitButtton">
              Visit Now <KeyboardArrowRightIcon />
            </Link>
          </div>
        </div>
        <div className="upcoming-Rightcard">
          <div className="latest-container">
            <p>Latest</p>
            <p>Blogs</p>
          </div>
          <div className="latest-container-card">
            {[1, 2, ].map((item) => (
              <div className="upcoming_blog-card" key={item}>
                <div className="blog-image-card">
                  <img src={UpcomingImg1} alt="" />
                </div>
                <p>AevumJagat Full Movie 2024</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;
