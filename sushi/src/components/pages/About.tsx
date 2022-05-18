import React from "react";
import Portrait from "../../assets/albert.jpg";
import Link from "../shared/Link";

import "./About.css";

export default function About(): React.ReactElement {
  const orange = { color: "#E84A27" };
  const blue = { color: "#0455A4" };

  const header = (
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
          <p>A (periodic) Software Engineer</p>
          <p>
            A recent graduate of The <strong style={orange}>University </strong>
            of <strong style={blue}>Illinois</strong> at
            <strong style={orange}> Urbana</strong>-
            <strong style={blue}>Champaign</strong> in{" "}
            <Link href="https://cs.illinois.edu/" cssID="uiuc-cs">
              Computer Science
            </Link>{" "}
          </p>
          <p>Trying my best 💛</p>
        </div>
      </div>
    </div>
  );

  const description = (
    <>
      <p>
        Hi, I'm Albert! I recently graduated from UIUC in Computer Science, with
        a minor in Statistics and Burrito Studies. I like to build impactful,
        fast, and reliable stuff.
      </p>
      <p>
        I'll be joining{" "}
        <Link href="https://stripe.com" cssID="stripe">
          Stripe
        </Link>{" "}
        as a Software Engineer later this year.
      </p>
      <p>
        My experience has been around the whole stack, ranging from product to
        infra.
      </p>
    </>
  );

  return (
    <div className="about-root">
      {header}
      <hr />
      <div className="centered about-text-container">
        {description}
        <p>Formerly, I've worked at:</p>
        <ul>
          {BulletPoint(
            "(backed by EQT Ventures, Accel, Salesforce Ventures, and others) building internal tooling and infra",
            "Airkit",
            "airkit",
            "https://airkit.com"
          )}
          {BulletPoint(
            "on the Stories and Reels team creating new products (launching globally soon!)",
            "Facebook",
            "facebook",
            "https://meta.com"
          )}
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
          {BulletPoint(
            "developing cloud backend services and products monitoring radio systems in real time",
            "Motorola",
            "motorola",
            "https://motorolasolutions.com"
          )}
          {BulletPoint(
            "creating a data extraction web platform for 1000s of engineers",
            "Caterpillar",
            "caterpillar",
            "https://caterpillar.com"
          )}
          {BulletPoint(
            "redesigning internal portals for PMs, Analysts, and executives",
            "Ameren",
            "ameren",
            "https://ameren.com"
          )}
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

function BulletPoint(
  content: string,
  linkName?: string,
  cssID?: string,
  href?: string
): React.ReactElement {
  if (linkName == null || cssID == null || href == null) {
    return <li>{content}</li>;
  }

  return (
    <li>
      <Link cssID={cssID} href={href}>
        {linkName}
      </Link>{" "}
      {content}
    </li>
  );
}
