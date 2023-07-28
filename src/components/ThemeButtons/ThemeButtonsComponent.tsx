import { applyTheme } from "../../themes/utils";
import { darkTheme } from "../../themes/dark";
import { baseTheme } from "../../themes/base";
import { pinkTheme } from "../../themes/pink";
import { cyanTheme } from "../../themes/cyan";
import { ThemeButton } from "./ThemeButton";
import { ThemeColor } from "../../utilities/types/types";

const themeColorButton: ThemeColor[] = ["pink", "dark", "cyan", "light"];
const themes = {
  pink: pinkTheme,
  dark: darkTheme,
  cyan: cyanTheme,
  light: baseTheme,
};

const handleThemeChange = (col: ThemeColor) => applyTheme(themes[col]);

export const ThemeButtonsComponent = () => {
  return (
    <div className="relative w-full h-max">
      <div className="absolute top-0 left-0 h-fit flex w-full justify-self-start place-self-start z-50">
        {themeColorButton.map((color) => (
          <ThemeButton
            key={color}
            color={color}
            handleThemeChange={handleThemeChange}
          ></ThemeButton>
        ))}
      </div>
    </div>
  );
};
