import React from 'react';

import { Element } from 'react-scroll';

import About from 'src/components/pages/About';
import Home from 'src/components/pages/Home';
import Navbar from 'src/components/shared/Navbar';
import More from 'src/components/pages/More';

export default function App(): React.ReactElement {
  return (
    <div className="m-0 h-full w-full overflow-x-hidden p-0">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="more">
        <More />
      </Element>
    </div>
  );
}
