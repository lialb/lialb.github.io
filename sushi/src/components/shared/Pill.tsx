import React from "react";

type Props = {
  label: string;
};

export default function Pill({ label }: Props): React.ReactElement {
  return (
    <div
      className="mr-1 mb-1 inline-block rounded px-1 py-px"
      id={label === "D3.js" ? "D3" : label}
    >
      {label}
    </div>
  );
}
