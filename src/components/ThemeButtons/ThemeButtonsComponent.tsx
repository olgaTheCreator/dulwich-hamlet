import { motion } from "framer-motion";
import { useThemeContext } from "../../utilities/hooks/useThemeContext";
import { ThemeContextInterface, ThemeColor } from "../../utilities/types/types";
import { Button } from "../Button";
import { applyTheme } from "../../themes/utils";
import { darkTheme } from "../../themes/dark";
import { baseTheme } from "../../themes/base";
import { pinkTheme } from "../../themes/pink";
import { cyanTheme } from "../../themes/cyan";
import { ThemeButton } from "./ThemeButton";

const themeColorButton: ThemeColor[] = ["pink", "dark", "cyan", "light"];
const themes = {
  pink: pinkTheme,
  dark: darkTheme,
  cyan: cyanTheme,
  light: baseTheme,
};

const handleThemeChange = (col: ThemeColor) => applyTheme(themes[col]);
export const Wrapper = () => {
  // const { theme, setTheme } = useThemeContext() as ThemeContextInterface;
  //   const [currentColor, setCurrentColor] =
  //     useState<BgColorType["color"]>("none");

  //   const currentBgColor = bgColor.find((color) => color.color == currentColor);
  return (
    <div className="relative w-full h-max">
      {/* <motion.div
        className={`absolute left-0 top-0 h-full min-h-screen w-full bg-cover bg-center transition-all duration-300 z-10 ${
          currentBgColor != undefined ? `${currentBgColor.pageStyle} ` : ""
        } `}
      > */}
      <div className="absolute top-0 left-0 h-fit flex w-full justify-self-start place-self-start z-50">
        {themeColorButton.map((color) => (
          <ThemeButton
            key={color}
            color={color}
            onClick={handleThemeChange}
          ></ThemeButton>
        ))}
        {/* <Button
          color="primary"
          // key={color}
          // className={`h-8 w-8 m-2 border-4 transition-all duration-300 bg-primary`}
          onClick={() => applyTheme(darkTheme)}
        ></Button>
        <Button
          color="secondary"
          // key={color}
          // className={`h-8 w-8 m-2 border-4 transition-all duration-300 bg-primary`}
          onClick={() => applyTheme(baseTheme)}
        ></Button> */}
      </div>
      {/* {children} */}
      {/* </motion.div> */}
    </div>
  );
};
