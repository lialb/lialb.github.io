import React from 'react';

import 'src/components/pages/Home.css';

import Drawing from 'src/assets/boy-and-cat.jpg';
import { IconTray } from 'src/components/shared/IconTray';

export default function Home(): React.ReactElement {
  return (
    <div className="home-root">
      <img alt="boy-and-cat" className="boy-and-cat-drawing" src={Drawing} />
      <p className="home-title">hello, i am albert</p>
      <br />
      <IconTray iconSize="2x" darkMode={false} />
    </div>
  );
}
