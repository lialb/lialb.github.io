import React from "react";
import Link from "./Link";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar(): React.ReactElement {
  return (
    <div className="navbar-root">
      <div className="navbar-right-container">
        <ScrollLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Link cssID="dark-link">about</Link>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <Link cssID="dark-link">projects</Link>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Link cssID="dark-link">skills</Link>
        </ScrollLink>
        <ScrollLink
          activeClass="active"
          to="more"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Link cssID="dark-link">more</Link>
        </ScrollLink>
        <Link href="./Albert-Li-Resume.pdf" cssID="resume-link-top">
          resume
        </Link>
      </div>
    </div>
  );
}
