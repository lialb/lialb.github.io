import React, { useRef, useState, useEffect } from "react";
import "./Link.css";

type Props = {
  children: React.ReactNode;
  cssID?: string;
  href?: string;
};

export default function Link({
  children,
  cssID,
  href,
}: Props): React.ReactElement {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getPosition = () => {
    if (linkRef.current != null) {
      const x = linkRef.current.offsetLeft;
      setX(x);

      const y = linkRef?.current.offsetTop;
      setY(y);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", getPosition);
  }, []);

  if (href == null) {
    return <strong id={cssID}>{children}</strong>;
  }

  return (
    <a
      ref={linkRef}
      className="link"
      href={href}
      id={cssID}
      rel="noopener noreferrer"
      target="_blank"
    >
      <strong>{children}</strong>
      <span className="tooltip" style={{ left: x + "px" }}>
        {href.split("/")[2]}🡕
      </span>
    </a>
  );
}
