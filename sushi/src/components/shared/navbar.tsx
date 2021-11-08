import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar(): React.ReactElement {
  return (
    <div className="navbar-root">
      <div className="navbar-right-container">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-5}
          duration={500}
        >
          <strong>about</strong>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <strong>projects</strong>
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-5}
          duration={500}
        >
          <strong>skills</strong>
        </Link>
        <Link
          activeClass="active"
          to="misc"
          spy={true}
          smooth={true}
          offset={-5}
          duration={500}
        >
          <strong>more</strong>
        </Link>
        <a href="./Albert-Li-Resume.pdf" target="_blank" rel="noopener noreferrer">
          <strong>resume</strong>
        </a>
      </div>
    </div>
  );
}
