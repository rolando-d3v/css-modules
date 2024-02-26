import React from "react";
import reactLogo from "../../assets/react.svg";

import css from "./react.module.scss";
import { useState } from "react";

export default function LogoReact() {
  const [cambio, setCambio] = useState(false);
  const [cambio2, setCambio2] = useState(false);

  console.log(cambio);

  return (
    <div
      className={`${css.react}  
      ${cambio === true ? css.cambio_fondo : css.cambio_fondo_2} 
      ${cambio2 === false && css.segundo_cambio}
      `}
    >
      <img src={reactLogo} className="logo react" alt="React logo" />
      <button
        type="button"
        className={css.btn_react}
        onClick={() => setCambio(!cambio)}
      >
        Cambio
      </button>
    </div>
  );
}
