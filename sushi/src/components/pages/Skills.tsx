import React from "react";
import SkillIcon from "../shared/SkillIcon";
import Title from '../shared/Title';

import Python from "../../assets/techIcons/python.png";
import CPP from "../../assets/techIcons/cpp.png";
import JavaScript from "../../assets/techIcons/javascript.png";
import TypeScript from "../../assets/techIcons/typescript.png";
import Java from "../../assets/techIcons/java.png";
import SQL from "../../assets/techIcons/sql.png";
import Shell from "../../assets/techIcons/shell.png";

import ReactTechIcon from "../../assets/techIcons/react.png";
import Angular from "../../assets/techIcons/angular.png";
import Node from "../../assets/techIcons/node.png";
import GraphQL from "../../assets/techIcons/graphql.png";
import Mongo from "../../assets/techIcons/mongo.png";
import Kubernetes from "../../assets/techIcons/kubernetes.png";
import Linux from "../../assets/techIcons/linux.png";

import "./Skills.css";

export default function Skills(): React.ReactElement {
  return (
    <div className="skills-root">
      <div className="centered">
        <Title>Stuff I've worked with</Title>
      </div>
      <div className="flex-container">
        <h1 className="tech-title">Languages:</h1>
        <SkillIcon image={Python} name="Python" />
        <SkillIcon image={CPP} name="C++" />
        <SkillIcon image={JavaScript} name="JavaScript" />
        <SkillIcon image={TypeScript} name="TypeScript" />
        <SkillIcon image={Java} name="Java" />
        <SkillIcon image={SQL} name="SQL" />
        <SkillIcon image={Shell} name="Shell" />
      </div>
      <br />
      <div className="flex-container">
        <h1 className="tech-title">Software:</h1>
        <SkillIcon image={ReactTechIcon} name="React" />
        <SkillIcon image={Angular} name="Angular" />
        <SkillIcon image={Node} name="Node" />
        <SkillIcon image={GraphQL} name="GraphQL" />
        <SkillIcon image={Mongo} name="MongoDB" />
        <SkillIcon image={Kubernetes} name="Kubernetes" />
        <SkillIcon image={Linux} name="Linux" />
      </div>
    </div>
  );
}
