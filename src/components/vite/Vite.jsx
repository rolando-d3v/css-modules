import React from "react";
import css from "./vite.module.scss";
import viteLogo from '../../assets/vite.svg'


export default function LogoVite() {
  return (
    <div  className={css.vite} >

        <img src={viteLogo} className="logo" alt="Vite logo" />

    </div>
  );
}
