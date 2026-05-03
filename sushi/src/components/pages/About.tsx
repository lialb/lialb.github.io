import React from "react";

import Portrait from "src/assets/albert.jpg";
import Link from "src/components/shared/Link";
import Typography from "src/components/shared/Typography";
import { LinkType } from "src/customTypings/types";
import EnglishList from "../shared/EnglishList";

const WORK_HISTORY = [
  {
    company: "Runloop",
    content: "building a platform for AI agents.",
    href: "https://runloop.ai",
    cssID: "runloop",
  },
  {
    company: "Stripe",
    content: "working on product and growth on payment methods.",
    href: "https://stripe.com",
    cssID: "stripe",
  },
  {
    company: "Airkit.ai",
    content: "building internal tooling and infra",
    href: "https://airkit.ai",
    cssID: "airkit",
  },
  {
    company: "Facebook",
    content: "on the Stories and Reels team creating Reels on web",
    href: "https://meta.com",
    cssID: "facebook",
  },
  {
    company: "Salesforce",
    content:
      "on the Runtime and VizPipeline team building out the Tableau Viz API",
    href: "https://salesforce.com",
    cssID: "salesforce",
  },
  {
    company: "Tableau",
    content:
      "on the Runtime and VizPipeline team building out the Tableau Viz API",
    href: "https://tableau.com",
    cssID: "tableau",
  },
  {
    company: "Motorola",
    content:
      "developing cloud services and products monitoring radio systems in real time",
    href: "https://motorolasolutions.com",
    cssID: "motorola",
  },
  {
    company: "Caterpillar",
    content: "creating a data extraction platform for 1000s of engineers",
    href: "https://caterpillar.com",
    cssID: "caterpillar",
  },
  {
    company: "Ameren",
    content:
      "revamping project management platforms for PMs, analysts, and executives",
    href: "https://ameren.com",
    cssID: "ameren",
  },
];

export default function About(): React.ReactElement {
  const header = (
    <div className="flex justify-center px-[15%] pt-[5%] max-[630px]:block max-[630px]:h-full max-[630px]:px-0">
      <img
        className="w-1/4 max-w-[230px] rounded-full object-scale-down py-[2%] max-[1000px]:w-[40%] max-[800px]:w-[60%] max-[630px]:mx-auto"
        src={Portrait}
        alt="Albert"
      />
      <div className="pl-[4%] max-[630px]:px-[15%]">
        <div className="relative top-1/2 flex -translate-y-1/2 flex-col gap-2 text-left max-[630px]:top-0 max-[630px]:translate-y-0 max-[630px]:text-center">
          <Typography variant="heading" className="mb-0">
            howdy 👋 I am:
          </Typography>
          <Typography variant="body" className="mb-0">
            a software engineer based in SF
          </Typography>
          <Typography variant="body" className="mb-0">
            usually napping, eating, and/or both
          </Typography>
          <Typography variant="body" className="mb-0">
            trying my best 💛
          </Typography>
        </div>
      </div>
    </div>
  );

  const description = (
    <>
      <Typography variant="body">
        Hey, I'm Albert! I'm currently an engineer building continual learning.
      </Typography>
      <Typography variant="body">
        Previously, I was at{" "}
        <Link
          href="https://stripe.com"
          cssID="stripe"
          linkType={LinkType.STRING}
        >
          Stripe
        </Link>{" "}
        working on product and growth on payment methods, buyer experience, and
        adaptive pricing.
      </Typography>
      <Typography variant="body">
        I also was eng #7 at{" "}
        <Link
          href="https://runloop.ai"
          cssID="runloop"
          linkType={LinkType.STRING}
        >
          Runloop
        </Link>{" "}
        where I built a platform and infrastructure for AI agents.
      </Typography>
      <Typography variant="body">
        I received my B.S. in Computer Science at{" "}
        <Link
          href="https://cs.illinois.edu"
          cssID="uiuc-cs"
          linkType={LinkType.STRING}
        >
          UIUC
        </Link>{" "}
        with a minor in Statistics. Then I dropped out of my master's (sorry
        mom).
      </Typography>
    </>
  );

  const history = (
    <>
      <Typography variant="body">
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
      </Typography>
      <br />
      <Typography variant="body">
        Connect with me on{" "}
        <Link
          href="https://linkedin.com/in/albs"
          cssID="linkedin-contact"
          linkType={LinkType.STRING}
        >
          LinkedIn
        </Link>
        {" or albert[dot]yiliang[at]gmail[dot]com"}
      </Typography>
    </>
  );

  return (
    <div className="pb-[3%] text-center">
      {header}
      <hr className="mx-auto mb-8 mt-0 w-[calc(100%-40px)] max-w-[700px] max-[630px]:mx-auto max-[630px]:mb-8 max-[630px]:mt-[2%] max-[630px]:w-[calc(100%-25%)] max-[630px]:max-w-[700px]" />
      <div className="mx-auto max-w-[700px] px-5 text-left max-[630px]:px-[12.5%] max-[800px]:[&_p]:text-base">
        {description}
        {history}
      </div>
    </div>
  );
}
