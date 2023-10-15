import React from 'react';

import 'src/components/pages/About.css';

import Portrait from 'src/assets/albert.png';
import Link from 'src/components/shared/Link';
import { LinkType } from 'src/customTypings/types';

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
        Hey, I'm Albert! I'm currently an engineer at{' '}
        <Link
          href="https://stripe.com"
          cssID="stripe"
          linkType={LinkType.STRING}
        >
          Stripe
        </Link>{' '}
        working on product and growth. I help merchants adopt more payment
        methods.
      </p>
      <p>
        I previously studied{' '}
        <Link
          href="https://cs.illinois.edu"
          cssID="uiuc-cs"
          linkType={LinkType.STRING}
        >
          Computer Science
        </Link>{' '}
        at UIUC, with a minor in Statistics and Burrito Studies.
      </p>
    </>
  );

  const history = (
    <>
      <p>Formerly, I've been fortunate to be a part of:</p>
      <ul>
        {BulletPoint(
          '(acquired by Salesforce) building internal tooling and infra',
          'Airkit.ai',
          'airkit',
          'https://airkit.ai'
        )}
        {BulletPoint(
          'on the Stories and Reels team creating the Reels web product',
          'Facebook',
          'facebook',
          'https://meta.com'
        )}
        <li>
          <p>
            <Link
              href="https://salesforce.com"
              cssID="salesforce"
              linkType={LinkType.STRING}
            >
              Salesforce
            </Link>{' '}
            /
            <Link
              href="https://tableau.com"
              cssID="tableau"
              linkType={LinkType.STRING}
            >
              Tableau
            </Link>{' '}
            on the Runtime and VizPipeline team building out the Tableau{' '}
            <Link
              href="https://tableau.github.io/extensions-api/docs/trex_tableau_viz.html"
              cssID="tableau"
              linkType={LinkType.STRING}
            >
              Viz API
            </Link>
          </p>
        </li>
        {BulletPoint(
          'developing cloud services and products monitoring radio systems in real time',
          'Motorola',
          'motorola',
          'https://motorolasolutions.com'
        )}
        {BulletPoint(
          'creating a data extraction platform for 1000s of engineers',
          'Caterpillar',
          'caterpillar',
          'https://caterpillar.com'
        )}
        {BulletPoint(
          'revamping project management platforms for PMs, analysts, and executives',
          'Ameren',
          'ameren',
          'https://ameren.com'
        )}
      </ul>
      <p>
        I also helped teach{' '}
        <Link
          href="https://cs196.cs.illinois.edu"
          cssID="uiuc-cs"
          linkType={LinkType.STRING}
        >
          CS 196: Freshman Honors
        </Link>{' '}
        (PM, website, & grading) and CS 125: Intro to CS (Course Assistant)
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

const BulletPoint = (
  content: string,
  linkName?: string,
  cssID?: string,
  href?: string
): React.ReactElement => {
  if (linkName == null || cssID == null || href == null) {
    return <li>{content}</li>;
  }

  return (
    <li>
      <Link cssID={cssID} href={href} linkType={LinkType.STRING}>
        {linkName}
      </Link>{' '}
      {content}
    </li>
  );
};
