import React, { useEffect, useRef, useState } from "react";

import useMouse from "@react-hook/mouse-position";
import { LinkType } from "src/customTypings/types";

const Y_PADDING = 20;
const X_PADDING = 10;

const removeHttpFromUrl = (link: string) => link.split("//")[1];

const LINK_BASE =
  "group relative px-0.5 text-inherit no-underline " +
  "before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-0 " +
  "before:rounded-md before:transition-[width] before:duration-[400ms] before:ease-in-out " +
  "before:content-[''] hover:before:w-full";

const BRAND_LINK_CLASSES: Record<string, string> = {
  "dark-link":
    "border-b-2 border-dark-link before:bg-dark-link-highlight hover:rounded-md hover:border-b-0 hover:text-dark-link",
  stripe:
    "border-b-2 border-stripe before:bg-stripe-highlight hover:rounded-md hover:border-b-0 hover:text-stripe",
  airkit:
    "border-b-2 border-airkit before:bg-airkit-highlight hover:rounded-md hover:border-b-0 hover:text-airkit",
  facebook:
    "border-b-2 border-facebook before:bg-facebook-highlight hover:rounded-md hover:border-b-0 hover:text-facebook",
  tableau:
    "border-b-2 border-tableau before:bg-tableau-highlight hover:rounded-md hover:border-b-0 hover:text-tableau",
  salesforce:
    "border-b-2 border-salesforce before:bg-salesforce-highlight hover:rounded-md hover:border-b-0 hover:text-salesforce",
  motorola:
    "border-b-2 border-motorola before:bg-motorola-highlight hover:rounded-md hover:border-b-0 hover:text-motorola",
  caterpillar:
    "border-b-2 border-caterpillar before:bg-caterpillar-highlight hover:rounded-md hover:border-b-0 hover:text-caterpillar",
  ameren:
    "border-b-2 border-ameren before:bg-ameren-highlight hover:rounded-md hover:border-b-0 hover:text-ameren",
  "uiuc-cs":
    "border-b-2 border-uiuc-orange before:bg-uiuc-orange-highlight hover:rounded-md hover:border-b-0 hover:text-uiuc-orange",
  runloop:
    "border-b-2 border-runloop before:bg-runloop-highlight hover:rounded-md hover:border-b-0 hover:text-runloop",
  "linkedin-contact":
    "border-b-2 border-linkedin before:bg-linkedin-highlight hover:rounded-md hover:border-b-0 hover:text-linkedin",
};

function linkClassName(cssID?: string): string {
  const variant =
    cssID != null && BRAND_LINK_CLASSES[cssID] != null
      ? BRAND_LINK_CLASSES[cssID]
      : "";
  return [LINK_BASE, variant].filter(Boolean).join(" ");
}

type Props = {
  children: React.ReactNode;
  cssID?: string;
  href?: string;
  linkType?: LinkType;
};

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
    return (
      <strong id={cssID} className={linkClassName(cssID)}>
        {children}
      </strong>
    );
  }

  return (
    <a
      ref={tooltipRef}
      className={linkClassName(cssID)}
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
        className="pointer-events-none invisible absolute z-10 whitespace-nowrap rounded bg-[#c8c8c8] px-1 text-sm text-black opacity-0 transition-opacity duration-1000 group-hover:visible group-hover:animate-fadeIn group-hover:opacity-100"
        style={{
          left: (mouse.x ?? 0) + x + X_PADDING + "px",
          top: (mouse.y ?? 0) + y + Y_PADDING + "px",
        }}
      >
        {removeHttpFromUrl(href)}&#x2197;
      </span>
    </a>
  );
}
