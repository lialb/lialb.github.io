import React from 'react';

import Drawing from 'src/assets/boy-and-cat.jpg';
import Typography from 'src/components/shared/Typography';

export default function Home(): React.ReactElement {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center">
      <img
        alt="boy-and-cat"
        className="min-w-[375px] w-1/4 py-[2%]"
        src={Drawing}
      />
      <Typography variant="lead">hello, i am albert</Typography>
    </div>
  );
}
