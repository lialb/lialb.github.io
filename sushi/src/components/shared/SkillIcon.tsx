import React from "react";
import '../pages/Skills.css';

type Props = {
  image: string;
  name: string;
};

export default function Icon({ image, name }: Props): React.ReactElement {
  return (
    <div className="tech-icon-root">
      <img src={image} width="60vw" className="icon-logo" alt="tech icon" />
      <p className="tech-label">{name}</p>
    </div>
  );
}
