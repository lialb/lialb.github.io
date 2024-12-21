import React from "react";

import "src/components/shared/Footer.css";

import { IconTray } from "src/components/shared/IconTray";

export default function Footer(): React.ReactElement {
  return (
    <div className="footer-root">
      <IconTray iconSize="lg" darkMode />
      <p className="credit">✨ 2020 - 2025 ✨</p>
    </div>
  );
}
