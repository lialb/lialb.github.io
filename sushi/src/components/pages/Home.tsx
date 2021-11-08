import React from "react";
import Drawing from "../../assets/boy-and-cat.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Home.css";
import "../../styles/Icons.css";

export default function Home(): React.ReactElement {
  return (
    <div className="home-root">
      <img className="boy-and-cat-drawing" src={Drawing} />
      <p className="home-title">hello, i am albert</p>
      <br />
      <div className="social-icons">
        <a href="mailto:albert.yiliang@gmail.com">
          <FontAwesomeIcon
            icon="envelope"
            className="social-icon-dark"
            size="2x"
          />
        </a>
        <a
          href="https://github.com/albearli"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "github"]}
            id="github"
            className="social-icon-dark"
            size="2x"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/albs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            id="linkedin"
            className="social-icon-dark"
            size="2x"
          />
        </a>
        <a
          href="./Albert-Li-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon="file-alt"
            className="social-icon-dark"
            size="2x"
          />
        </a>
      </div>
    </div>
  );
}
