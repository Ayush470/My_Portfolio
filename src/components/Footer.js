import "./FooterStyles.css";
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return <div className="footer">
    <div className="footer-container">
      <div className="left">
        <div className="location">
          <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
          <div>
            <p>Varanasi,</p>
            <p>Uttar Pradesh,</p>
            <p>India</p>
          </div> 
        </div>
        <div className="phone">
          <h4>
            <FaPhone size = {20} style ={{color: "#fff", marginRight: "2rem"}} />
            91-8840377479
          </h4>
        </div>
        <div className="email">
          <h4>
            <FaMailBulk size = {20} style ={{color: "#fff", marginRight: "2rem"}} />
            ap4701443@gmail.com
          </h4>
        </div>
      </div>
      <div className="right">
        <h4>
          Proficiency & Interests
        </h4>
        <p>
          I enjoy creating websites and solving coding problems.
        </p>
        <div className="social">
          {/* <FaFacebook
           size = {30}
           style = {{color: "#fff", marginRight: "1rem"}}
          /> */}
          <a href="https://www.facebook.com/ayushprajapati20" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} style={{ color: '#fff', marginRight: '1rem' }} />
          </a>
          {/* <FaTwitter
           size = {30}
           style = {{color: "#fff", marginRight: "1rem"}}
          /> */}
          <a href="https://twitter.com/Ayush302037177" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} style={{ color: '#fff', marginRight: '1rem' }} />
          </a>
          {/* <FaLinkedin
           size = {30}
           style = {{color: "#fff", marginRight: "1rem"}}
          /> */}
          <a href="https://www.linkedin.com/in/ayushprajapati2000/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} style={{ color: '#fff', marginRight: '1rem' }} />
          </a>
       </div>
      </div>
    </div>
  </div>;
};

export default Footer;
