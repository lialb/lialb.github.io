import React from "react";
import Home from "./components/pages/home";
import Navbar from "./components/shared/navbar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFileAlt,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Element } from "react-scroll";

import "./styles/main.css";
import "./App.css";

library.add(fab, faEnvelope, faFileAlt, faHome);

export default function App(): React.ReactElement {
  return (
    <div className="App">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
    </div>
  );
}
