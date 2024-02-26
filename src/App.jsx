import React from "react";
import LogoReact from "./components/react/React";
import LogoVite from "./components/vite/Vite";
import css from "./app.module.scss";

function App() {

  console.log(css);

  return (
    <div className={css.app}>
      <div className={css.div_app}>
        <LogoVite />
        <LogoReact />
      </div>
    </div>
  );
}

export default App;
