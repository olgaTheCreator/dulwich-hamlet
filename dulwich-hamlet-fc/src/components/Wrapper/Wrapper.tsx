import { useState } from "react";
import { motion } from "framer-motion";
import { useThemeContext } from "../../utilities/hooks/useThemeContext";
import { ThemeContextInterface, themeColor } from "../../utilities/types";

// const bgColor = [
//   {
//     color: "black",
//     buttonStyle: "bg-black/70  border-black ",
//     pageStyle: "bg-blend-multiply bg-black/70  border-black",
//   },
//   {
//     color: "pink",
//     buttonStyle: "bg-pink/70  border-pink",
//     pageStyle: "bg-blend-multiply bg-pink/70  border-pink",
//   },
//   {
//     color: "crazy",
//     buttonStyle: "backdrop-invert bg-cyan/70 border-cyan",
//     pageStyle:
//       "saturate-200 backdrop-hue-rotate-180 backdrop-brightness-125 bg-cyan/70",
//   },
//   {
//     color: "none",
//     buttonStyle: "bg-white/40 border-off_white",
//     pageStyle: "",
//   },
// ] as const;

// type BgColorType = (typeof bgColor)[number];

const color: themeColor[] = ["dark", "pink", "cyan", "light"];

export const Wrapper = () => {
  const { theme, setTheme } = useThemeContext() as ThemeContextInterface;
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
        {color.map((color) => (
          <motion.button
            key={color}
            className={`h-8 w-8 m-2 border-4 transition-all duration-300 border-${color}-background`}
            onClick={() => {
              setTheme(color);
              console.log(theme);
            }}
          ></motion.button>
        ))}
      </div>
      {/* {children} */}
      {/* </motion.div> */}
    </div>
  );
};
