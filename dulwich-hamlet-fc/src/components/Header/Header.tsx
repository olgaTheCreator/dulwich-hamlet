import { useState } from "react";
import Logo from "./logo";
import { motion } from "framer-motion";

const bgColor = [
  {
    color: "black",
    buttonStyle: "bg-black/70  border-black ",
    pageStyle: "bg-blend-multiply",
  },
  {
    color: "pink",
    buttonStyle: "bg-pink/70  border-pink",
    pageStyle: "bg-blend-multiply",
  },
  {
    color: "crazy",
    buttonStyle: "backdrop-invert bg-cyan/70 border-cyan",
    pageStyle: "saturate-200  bg-blend-hue",
  },
  {
    color: "none",
    buttonStyle: "bg-white/40 border-off_white",
    pageStyle: "",
  },
] as const;

type BgColorType = (typeof bgColor)[number];

const Header = () => {
  const [currentColor, setCurrentColor] =
    useState<BgColorType["color"]>("none");
  const currentBgColor = bgColor.find((color) => color.color == currentColor);
  return (
    <div
      className={`bg-player w-full h-screen bg-fixed bg-cover bg-center transition-all duration-300 flex flex-col relative bg-clip-text ${
        currentBgColor != undefined
          ? `${currentBgColor.pageStyle} ${currentBgColor.buttonStyle}`
          : ""
      }`}
    >
      <div className=" h-fit flex w-full justify-self-start place-self-start">
        {bgColor.map((color) => (
          <motion.button
            key={color.color}
            className={`h-8 w-8 m-2 border-4 transition-all duration-300
         ${color.buttonStyle}`}
            onClick={() => setCurrentColor(color.color)}
          ></motion.button>
        ))}
      </div>
      <div className=" w-full relative h-max place-self-center flex flex-col my-28 text-transparent gap-2 text-shadow text-clip">
        <h1 className="font-extrabold text-7xl">DULWICH HAMLET</h1>
        <h2 className="font-bold text-6xl ">WOMEN FIRST XI</h2>
      </div>
    </div>
  );
};

export default Header;

//   return (
//     <header className="w-full h-15 flex items-center gap-5  p-2 bg-blue shadow-lg shadow-black/50">
//       <div className="text-pink-500 w-full h-full relative basis-2/5 text-shadow shadow-black/50">
//         {" "}
//         <Logo />
//       </div>
//       <div className="text-off_white basis-3/5 flex flex-col gap-2 text-shadow shadow-black/50">
//         <h1 className="font-extrabold text-3xl ">DULWICH HAMLET</h1>
//         <h2 className="font-bold text-xl">WOMEN FIRST XI</h2>
//       </div>
//     </header>
//   );
// };
