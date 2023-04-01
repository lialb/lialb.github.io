import React from 'react';

import 'src/App.css';
import 'src/styles/Main.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faFileAlt,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { Element } from 'react-scroll';

import About from 'src/components/pages/About';
import Home from 'src/components/pages/Home';
import Navbar from 'src/components/shared/Navbar';
import More from 'src/components/pages/More';
import Footer from 'src/components/shared/Footer';

library.add(fab, faEnvelope, faFileAlt, faHome);

export default function App(): React.ReactElement {
  return (
    <div className="App">
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
      <Footer />
    </div>
  );
}
