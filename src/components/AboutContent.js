import "./AboutContentStyles.css";

import React from "react";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";
import { Link } from "react-router-dom"


const AboutContent = () => {
  return <div className="about">
    <div className="left">
      <h1>Who Am I?</h1>
      <p>I have done Bachelor of Technology in Civil Engineering from Indian Institute of Technology Kanpur. I am a full stack developer proficient in MERN stack. Besides, I also enjoy solving coding problems.</p>
      <Link to = "/contact">
        <button className="btn">CONTACT</button>
      </Link>
    </div>
    <div className="right">
      <div className="img-container">
        <div className="img-stack top">
          <img src = {React1} className="img" alt="true" />
        </div>
        <div className="img-stack bottom">
          <img src = {React2} className="img" alt="true" />
        </div>
      </div>
    </div>
  </div>;
};

export default AboutContent;
