import "./WorkCardStyles.css";
import React from "react";
import WorkCardData from "./WorkCradData";
import WorkCard from "./WorkCard";

const Work = (props) => {
  return <div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
      {WorkCardData.map((val, ind) => {
        return (
          <WorkCard 
            key = {ind}
            imgsrc = {val.imgsrc}
            title = {val.title}
            text = {val.text}
            view = {val.view}
            source = {val.source}
          />
        )
      })}
    </div>
  </div>
};

export default Work;
