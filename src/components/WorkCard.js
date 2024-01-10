import "./WorkCardStyles.css";
import React from "react";

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src = {props.imgsrc} alt="Content_related_image"/>
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          {/* <NavLink to={props.view} className="btn">
            VIEW
          </NavLink>
          <NavLink to={props.source} className="btn">
            SOURCE
          </NavLink> */}
          <a href={props.view} className="btn" target="_blank" rel="noopener noreferrer">
            VIEW
          </a>
          <a href={props.source} className="btn" target="_blank" rel="noopener noreferrer">
            SOURCE
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
