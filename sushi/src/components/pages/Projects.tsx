import React from 'react';

import 'src/components/pages/Projects.css';

import Tangram from 'src/assets/tangram.png';
import UIUCDiversity from 'src/assets/I.png';
import Pill from 'src/components/shared/Pill';
import Title from 'src/components/shared/Title';
import Link from 'src/components/shared/Link';

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
          tech={['Python', 'D3.js', 'Angular']}
        />
        <Project
          desc="Tiktok, but 4 way swiping"
          image={Tangram}
          link="https://github.com/lialb/tangram"
          name="Tangram"
          tech={['Flutter', 'Python', 'Go', 'Neo4j', 'MySQL']}
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
