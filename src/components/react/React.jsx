import React from "react";
import css from "./react.module.scss";
import reactLogo from "../../assets/react.svg";
import { useState } from "react";

export default function LogoReact() {
  const [cambio, setCambio] = useState(false);
  const [cambio2, setCambio2] = useState(false);

  return (
    <div className={css.react}>
      <section className={css.seccion}>
        <button
          type="button"
          className={css.btn_react}
          // className={css["btn_react"]}
          onClick={() => setCambio(!cambio)}
        >
          boton 01
        </button>
        <button
          type="button"
          className={`${css.btn_react} ${css.border}`}
          // className={[css.btn_react, css.border] .join(' ')}
          onClick={() => setCambio2(!cambio2)}
        >
          boton 2
        </button>
    
      </section>

      <figure className={css.content_img}>
        <img
          className={`
           ${cambio === true ? css.borde_azul : css.boder_rojo}
           ${cambio2 === true && css.cambio_width}
            `}
          // className={cambio === true ? css["border_azul"] :  css["border_rojo"]}
          src={reactLogo}
          alt="logo"
        />
      </figure>
    </div>
  );
}
