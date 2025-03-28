import React from "react";

import "src/components/pages/About.css";

import Portrait from "src/assets/albert.png";
import Link from "src/components/shared/Link";
import { LinkType } from "src/customTypings/types";
import EnglishList from "../shared/EnglishList";

const WORK_HISTORY = [
  {
    company: "stripe",
    content: "working on product and growth on payment methods.",
    href: "https://stripe.com",
    cssID: "stripe",
  },
  {
    company: "airkit.ai",
    content: "building internal tooling and infra",
    href: "https://airkit.ai",
    cssID: "airkit",
  },
  {
    company: "facebook",
    content: "on the Stories and Reels team creating Reels on web",
    href: "https://meta.com",
    cssID: "facebook",
  },
  {
    company: "salesforce",
    content:
      "on the Runtime and VizPipeline team building out the Tableau Viz API",
    href: "https://salesforce.com",
    cssID: "salesforce",
  },
  {
    company: "tableau",
    content:
      "on the Runtime and VizPipeline team building out the Tableau Viz API",
    href: "https://tableau.com",
    cssID: "tableau",
  },
  {
    company: "motorola",
    content:
      "developing cloud services and products monitoring radio systems in real time",
    href: "https://motorolasolutions.com",
    cssID: "motorola",
  },
  {
    company: "caterpillar",
    content: "creating a data extraction platform for 1000s of engineers",
    href: "https://caterpillar.com",
    cssID: "caterpillar",
  },
  {
    company: "ameren",
    content:
      "revamping project management platforms for PMs, analysts, and executives",
    href: "https://ameren.com",
    cssID: "ameren",
  },
];

export default function About(): React.ReactElement {
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
          <h2>howdy 👋 I am:</h2>
          <p>[periodically] a software engineer</p>
          <p>usually napping, eating, and/or both</p>
          <p>trying my best 💛</p>
        </div>
      </div>
    </div>
  );

  const description = (
    <>
      <p>
        Hey, I'm Albert! I'm currently an engineer at{" "}
        <Link
          href="https://runloop.ai"
          cssID="runloop"
          linkType={LinkType.STRING}
        >
          runloop ai
        </Link>
        {", "}
        building a platform for building AI agents.
        <p>
          Before that, I was at{" "}
          <Link
            href="https://stripe.com"
            cssID="stripe"
            linkType={LinkType.STRING}
          >
            stripe
          </Link>
          , where I worked on product and growth on payment methods.
        </p>
      </p>
      <p>
        I studied computer science at{" "}
        <Link
          href="https://cs.illinois.edu"
          cssID="uiuc-cs"
          linkType={LinkType.STRING}
        >
          UIUC
        </Link>{" "}
        with a minor in Statistics.
      </p>
    </>
  );

  const history = (
    <>
      <p>
        I've been fortunate to be a part of: <br />
        <EnglishList
          items={WORK_HISTORY.map(({ company, href, cssID }) => (
            <span key={company}>
              <Link href={href} cssID={cssID} linkType={LinkType.STRING}>
                {company}
              </Link>
            </span>
          ))}
        />
      </p>
    </>
  );

  return (
    <div className="about-root">
      {header}
      <hr />
      <div className="centered about-text-container">
        {description}
        {history}
      </div>
    </div>
  );
}

const BulletPoint = ({
  content,
  linkName,
  cssID,
  href,
}: {
  content: string;
  linkName?: string;
  cssID?: string;
  href?: string;
}): React.ReactElement => {
  if (linkName == null || cssID == null || href == null) {
    return <li>{content}</li>;
  }

  return (
    <li>
      <Link cssID={cssID} href={href} linkType={LinkType.STRING}>
        {linkName}
      </Link>{" "}
      {content}
    </li>
  );
};
