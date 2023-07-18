import { useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ThemeContextInterface } from "../types";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeContextInterface["theme"]>("light");

  //   const currentTheme = (color: ThemeContextInterface["theme"]) => {
  //     setTheme(color);
  //   };
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
