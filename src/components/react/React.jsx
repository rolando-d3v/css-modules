import React from "react";
import reactLogo from "../../assets/react.svg";

import css from "./react.module.scss";

export default function LogoReact() {
  return (
    <div className={css.react}>
      <img src={reactLogo} className="logo react" alt="React logo" />
    </div>
  );
}
