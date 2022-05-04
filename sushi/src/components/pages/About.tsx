import React from "react";
import Portrait from "../../assets/albert.jpg";
import Link from "../shared/Link";

import "./About.css";

export default function About(): React.ReactElement {
  const orange = { color: "#E84A27" };
  const blue = { color: "#0455A4" };

  return (
    <div className="about-root">
      <div className="about-header">
        <img
          className="profile-picture"
          src={Portrait}
          width="30%"
          alt="Albert"
        />
        <div className="inner-text-container">
          <div className="inner-text">
            <h2>Hey 👋 I am:</h2>
            <p>
              Studying{" "}
              <Link href="https://cs.illinois.edu/" cssID="uiuc-cs">
                Computer Science
              </Link>{" "}
              at The <strong style={orange}>University </strong>
              of <strong style={blue}>Illinois</strong> at
              <strong style={orange}> Urbana</strong>-
              <strong style={blue}>Champaign</strong>
            </p>
            <p>Minoring in Statistics and Burrito Studies</p>
            <p>Trying my best 💛</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="centered about-text-container">
        <p>
          I'm a senior at UIUC. I love creating impactful things. As a student,
          I'm interested broadly in systems and security. My experience has been
          around the whole stack, ranging from product to infra.
        </p>
        <p>
          I'll be joining{" "}
          <Link href="https://stripe.com" cssID="stripe">
            Stripe
          </Link>{" "}
          as a Software Engineer later this year.
        </p>
        <p>Formerly, I've worked at:</p>
        <ul>
          <li>
            <p>
              <Link href="https://airkit.com" cssID="airkit">
                Airkit
              </Link>{" "}
              (backed by EQT Ventures, Accel, Salesforce Ventures, and others)
              building internal tooling and infra
            </p>
          </li>
          <li>
            <p>
              <Link href="https://meta.com" cssID="facebook">
                Facebook
              </Link>{" "}
              on the Stories and Reels team creating new products (launching
              globally soon!)
            </p>
          </li>
          <li>
            <p>
              <Link href="https://salesforce.com" cssID="salesforce">
                Salesforce
              </Link>{" "}
              /
              <Link href="https://tableau.com" cssID="tableau">
                Tableau
              </Link>{" "}
              on the Runtime and VizPipeline team building out the Tableau{" "}
              <Link
                href="https://tableau.github.io/extensions-api/docs/trex_tableau_viz.html"
                cssID="tableau"
              >
                Viz API
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link href="https://motorolasolutions.com" cssID="motorola">
                Motorola
              </Link>{" "}
              developing cloud backend services and products monitoring radio systems in real
              time
            </p>
          </li>
          <li>
            <p>
              <Link href="https://caterpillar.com" cssID="caterpillar">
                Caterpillar
              </Link>{" "}
              creating a data extraction web platform for 1000s of engineers
            </p>
          </li>
          <li>
            <p>
              <Link href="https://ameren.com" cssID="ameren">
                Ameren
              </Link>{" "}
              redesigning internal portals for PMs, Analysts, and executives
            </p>
          </li>
        </ul>
        <p>
          I also helped teach{" "}
          <Link href="https://cs196.cs.illinois.edu/" cssID="uiuc-cs">
            CS 196: Freshman Honors
          </Link>{" "}
          (PM, website, & grading) and CS 125: Intro to CS (Course Assistant)
        </p>
      </div>
    </div>
  );
}
