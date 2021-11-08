import React, { useEffect, useState } from "react";

import { Link } from "react-scroll";

export default function Navbar(): React.ReactElement {
  const [atTop, setAtTop] = useState(true);

  const scrollEvent = () => {
    if (window.pageYOffset <= 500) {
      setAtTop(true);
    } else if (atTop) {
      setAtTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <div
      className="navbar-root"
      style={{ background: atTop ? "none" : "var(--main-background)" }}
    >
      <div className="navbar-right-container">
        <Link
          style={{
            color: atTop ? "var(--main-background)" : "var(--light-secondary)",
          }}
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <strong>about</strong>
        </Link>
        <Link
          style={{
            color: atTop ? "var(--main-background)" : "var(--light-secondary)",
          }}
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
          style={{
            color: atTop ? "var(--main-background)" : "var(--light-secondary)",
          }}
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <strong>skills</strong>
        </Link>
        <Link
          style={{
            color: atTop ? "var(--main-background)" : "var(--light-secondary)",
          }}
          activeClass="active"
          to="more"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <strong>more</strong>
        </Link>
        <a
          href="./Albert-Li-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <strong
            style={{
              color: atTop
                ? "var(--main-background)"
                : "var(--light-secondary)",
            }}
          >
            resume
          </strong>
        </a>
      </div>
    </div>
  );
}
