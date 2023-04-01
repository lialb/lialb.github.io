import React from 'react';

import 'src/components/shared/Footer.css';

import { IconTray } from 'src/components/shared/IconTray';

export default function Footer(): React.ReactElement {
  return (
    <div className="footer-root">
      <IconTray iconSize="lg" darkMode />
      <p className="credit">Made by Albert ✨ 2020 - 2023</p>
    </div>
  );
}
