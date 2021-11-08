import React from "react";
import Cat from "../../assets/cat.jpg";

import "./More.css";

export default function More(): React.ReactElement {
  return (
    <div className="more-root">
      <h1 className="more-title">Other Stuff</h1>
      <div className="more-facts">
        <p>
          I like
          <a
            href="https://lichess.org/@/Albear"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            chess ♟️
          </a>
        </p>
        <p>Big fan of fútbol ⚽ and basketball 🏀</p>
        <p>I actually use Vim and Arch (btw)</p>
        <p>I work hard so my cat (Samwise) can have a better life</p>
        <img className="cat-picture" src={Cat} width="30%" alt="Samwise Cat" />
        <p className="counter-text">
          This page has been viewed at least {" "} &nbsp;
          <img
            src="https://stuff.mit.edu/cgi/counter/albearli"
            alt="counter"
            className="counter"
          ></img>{" "}
          &nbsp; times
        </p>
      </div>
    </div>
  );
}
