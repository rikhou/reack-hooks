import React from "react";
import Toolbar from "./Toolbar";
import ThemeProvide from "./ThemeProvide";

function MyApp() {
  return (
    <ThemeProvide>
      <Toolbar />
    </ThemeProvide>
  );
}

export default MyApp;
