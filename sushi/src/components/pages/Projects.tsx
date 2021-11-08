import React from "react";
import Tangram from "../../assets/tangram.png";
import UIUCDiversity from "../../assets/uiuc-diversity.png";

import "./Projects.css";

export default function Projects(): React.ReactElement {
  return (
    <div className="projects-root">
      <h1 className="centered">Some Projects</h1>
      <div className="flex-container">
        <Project
          desc="15 years of racial demographics of every major and college at the University of Illinois"
          image={UIUCDiversity}
          link="https://lialbert.com/uiuc-diversity"
          name="UIUC Diversity"
        />
        <Project
          desc="Tiktok, but 4 way swiping"
          image={Tangram}
          link="https://github.com/albearli/tangram"
          name="Tangram"
        />
      </div>
    </div>
  );
}

type ProjectProps = {
  image: string;
  name: string;
  desc: string;
  link: string;
};

function Project({
  desc,
  image,
  link,
  name,
}: ProjectProps): React.ReactElement {
  return (
    <div className="project">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="card">
          <img src={image} alt="project image" className="project-picture" />
          <div className="card-container">
            <h3>
              <b>{name}</b>
            </h3>
            <p>{desc}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
