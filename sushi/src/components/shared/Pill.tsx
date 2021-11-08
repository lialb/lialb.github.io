import React from "react";

type Props = {
  label: string;
};

export default function Pill({ label }: Props): React.ReactElement {
  return (
    <div className="pill" id={label === "D3.js" ? "D3" : label}>
      {label}
    </div>
  );
}
