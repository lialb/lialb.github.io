import React from "react";

import { Link as ScrollLink } from "react-scroll";

import Link from "src/components/shared/Link";

export default function Navbar(): React.ReactElement {
  return (
    <div className="absolute left-0 right-0 top-0 z-[1] flex items-center px-8 py-4">
      <div className="ml-auto [&>*]:ml-[12.5px] [&>*]:cursor-pointer [&>*:first-child]:ml-0">
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
          to="more"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Link cssID="dark-link">more</Link>
        </ScrollLink>
      </div>
    </div>
  );
}
