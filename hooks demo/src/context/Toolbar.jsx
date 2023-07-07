import React from "react";
import themes from "./themes";
import { useTheme } from "./ThemeProvide";

function Toolbar() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Nav />
      <label>
        <input
          type="checkbox"
          checked={theme === themes.dark}
          onChange={(e) => {
            setTheme(theme === themes.dark ? themes.light : themes.dark);
          }}
        />
        Use dark mode
      </label>
    </div>
  );
}

const Nav = () => (
  <div>
    <Panel />
  </div>
);

const Panel = () => (
  <div>
    <ThemedButton />
  </div>
);

function ThemedButton() {
  const { theme } = useTheme();
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      theme button
    </button>
  );
}

export default Toolbar;
