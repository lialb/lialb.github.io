import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.css";

export default function Footer(): React.ReactElement {
  return (
    <div className="footer-root">
      <div className="social-icons">
        <br />
        <a href="mailto:albert.yiliang@gmail.com">
          <FontAwesomeIcon
            icon="envelope"
            className="social-icon-light"
            size="lg"
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
            className="social-icon-light"
            size="lg"
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
            className="social-icon-light"
            size="lg"
          />
        </a>
        <a
          href="./Albert-Li-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon="file-alt"
            className="social-icon-light"
            size="lg"
          />
        </a>
      </div>
      <p className="credit">Made by Albert ✨ 2020 - 2021</p>
    </div>
  );
}
