import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Title({ children }: Props): React.ReactElement {
  return <h1 className="title-root">{children}</h1>;
}
