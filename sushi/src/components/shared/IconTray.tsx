import React from 'react';
import 'src/components/shared/Icons.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

type Props = {
  iconSize:
    | 'xs'
    | 'lg'
    | 'sm'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x';
  darkMode: boolean;
};

export const IconTray = ({ iconSize, darkMode }: Props): React.ReactElement => {
  const iconClassName = classNames(
    { 'social-icon-dark': !darkMode },
    { 'social-icon-light': darkMode }
  );

  return (
    <div className="social-icons">
      <a href="mailto:albert.yiliang@gmail.com">
        <FontAwesomeIcon
          icon="envelope"
          className={iconClassName}
          size={iconSize}
        />
      </a>
      <a
        href="https://github.com/lialb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={['fab', 'github']}
          id="github"
          className={iconClassName}
          size={iconSize}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/albs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={['fab', 'linkedin']}
          id="linkedin"
          className={iconClassName}
          size={iconSize}
        />
      </a>
      <a
        href="./Albert-Li-Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon="file-alt"
          className={iconClassName}
          size={iconSize}
        />
      </a>
    </div>
  );
};
