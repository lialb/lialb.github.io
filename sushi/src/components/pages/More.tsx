import React from "react";

import Cat from "src/assets/cat.jpg";
import Typography from "src/components/shared/Typography";

export default function More(): React.ReactElement {
  return (
    <div className="mt-8 text-center md:mt-10">
      <Typography variant="heading" className="mb-2 pt-[5%]">
        More
      </Typography>
      <Typography variant="body" className="mb-3 md:mb-4">
        I like chess, poker, and Liverpool
      </Typography>
      <Typography variant="body" className="mb-3 md:mb-4">
        I love food (follow @albli on beli)
      </Typography>
      <Typography variant="body" className="mb-3 md:mb-4">
        I work hard so my cat (Samwise) can have a better life
      </Typography>
      <img
        className="mx-auto my-[2%] block aspect-square w-[min(240px,28vw)] rounded-full object-cover max-[800px]:w-[min(320px,70vw)]"
        src={Cat}
        alt="Samwise Cat"
      />
      <Typography variant="caption">
        this page has been viewed at least &nbsp;
        <img
          src="https://stuff.mit.edu/cgi/counter/albearli"
          alt="counter"
          className="inline p-0"
        />{" "}
        &nbsp; times
      </Typography>
    </div>
  );
}
