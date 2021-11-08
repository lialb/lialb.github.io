import React from "react";

type Props = {
  cssID?: string;
  children: React.ReactNode;
  href: string;
};

export default function Link({
  children,
  cssID,
  href,
}: Props): React.ReactElement {
  return (
    <a
      className="link"
      href={href}
      id={cssID}
      rel="noopener noreferrer"
      target="_blank"
    >
      <strong>{children}</strong>
    </a>
  );
}
