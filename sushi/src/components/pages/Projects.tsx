import React from "react";
import Tangram from "../../assets/tangram.png";
import UIUCDiversity from "../../assets/I.png";
import Pill from "../shared/Pill";
import Title from "../shared/Title";
import Link from "../shared/Link";

import "./Projects.css";

export default function Projects(): React.ReactElement {
  return (
    <div className="projects-root">
      <div className="centered">
        <Title>Some Projects</Title>
      </div>
      <div className="flex-container">
        <Project
          desc="15 years of racial demographics of every major and college at the University of Illinois"
          image={UIUCDiversity}
          link="https://lialbert.com/uiuc-diversity"
          name="UIUC Diversity"
          tech={["Python", "D3.js", "Angular"]}
        />
        <Project
          desc="Tiktok, but 4 way swiping"
          image={Tangram}
          link="https://github.com/albearli/tangram"
          name="Tangram"
          tech={["Flutter", "Python", "Go", "Neo4j", "MySQL"]}
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
  tech: Array<string>;
};

function Project({
  desc,
  image,
  link,
  name,
  tech,
}: ProjectProps): React.ReactElement {
  return (
    <div className="project">
      <Link href={link}>
        <div className="card">
          <img src={image} alt="project" className="project-picture" />
          <div className="card-container">
            <h3 className="project-title">{name}</h3>
            <p className="project-description">{desc}</p>
            <div className="pills-container">
              {tech.map((item) => {
                return <Pill key={item} label={item} />;
              })}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
