import React, { useEffect, useRef, useState } from "react";
import useMouse from "@react-hook/mouse-position";
import { LinkType } from "../../customTypings/types";

import "./Link.css";

type Props = {
  children: React.ReactNode;
  cssID?: string;
  href?: string;
  linkType?: LinkType;
};

const Y_PADDING = 20;
const X_PADDING = 10;

export default function Link({
  children,
  cssID,
  href,
  linkType,
}: Props): React.ReactElement {
  const tooltipRef = useRef(null);
  const mouse = useMouse(tooltipRef, { enterDelay: 0, leaveDelay: 0 });

  const linkRef = useRef<HTMLAnchorElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getPosition = () => {
    if (linkRef?.current == null) {
      return;
    }

    setX(linkRef.current.offsetLeft);
    setY(linkRef.current.offsetTop);
  };

  useEffect(() => {
    getPosition();
    window.addEventListener("mouseover", getPosition);
  }, []);

  if (href == null) {
    return <strong id={cssID}>{children}</strong>;
  }

  return (
    <a
      ref={tooltipRef}
      className="link"
      href={href}
      id={cssID}
      rel="noopener noreferrer"
      target="_blank"
    >
      {linkType === LinkType.STRING ? (
        <strong ref={linkRef}>{children}</strong>
      ) : (
        <span ref={linkRef}>{children}</span>
      )}
      <span
        className="tooltip"
        style={{
          left: (mouse.x ?? 0) + x + X_PADDING + "px",
          top: (mouse.y ?? 0) + y + Y_PADDING + "px",
        }}
      >
        {href.split("//")[1]}&#x2197;
      </span>
    </a>
  );
}
