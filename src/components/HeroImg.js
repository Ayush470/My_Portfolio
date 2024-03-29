import "./HeroImgStyles.css";
import IntroImg from "../assets/intro-bg.jpg"
import React from "react";
import { Link } from "react-router-dom";


const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
      <img className="intro-img" src={IntroImg} alt="IntroImg" />
    </div>
    <div className="content">
      <h1>AYUSH PRAJAPATI</h1>
      <p>HI, I'M A WEB ENTHUSIAST</p>
      <h1>Full Stack Developer</h1>
      <div>
        <Link to = "/project" className = "btn">Projects</Link>
        <Link to = "/contact" className = "btn btn-light">Contact</Link>
      </div>
    </div>
  </div>;
};

export default HeroImg;
