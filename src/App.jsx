import React from "react";
import LogoReact from "./components/react/React";
import css from "./app.module.css";

function App() {
  return (
    <div className={css.app}>
      <div className={css.div_app}>
        <LogoReact />
      </div>
    </div>
  );
}

export default App;
