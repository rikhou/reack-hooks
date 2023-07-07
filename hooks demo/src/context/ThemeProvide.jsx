import React, { useState, createContext, useContext } from "react";
import themes from "./themes";

const ThemeContext = createContext(themes.light);

function ThemeProvide({ children }) {
  const [theme, setTheme] = useState(themes.dark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

const useTheme = () => useContext(ThemeContext);

export default ThemeProvide;
export { useTheme };
