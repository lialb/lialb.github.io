import React from "react";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Navbar from "./components/shared/Navbar";
import More from "./components/pages/More";
import Footer from "./components/shared/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFileAlt,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Element } from "react-scroll";

import "./styles/Main.css";
import "./App.css";

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
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="more">
        <More />
      </Element>
      <Footer />
    </div>
  );
}
