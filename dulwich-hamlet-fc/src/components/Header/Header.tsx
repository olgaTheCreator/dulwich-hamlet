import { useEffect, useRef, useState } from "react";
import Logo from "./logo";
import { motion, useScroll } from "framer-motion";
import { WatchUsPlay } from "../WatchUsPlay/WatchUsPlay";

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
  // const ref = useRef(null);
  const currentBgColor = bgColor.find((color) => color.color == currentColor);
  // const { scrollY } = useScroll({
  //   container: ref,
  // });
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScrollButton = () => {
      window.scrollY > 100 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", handleScrollButton);
    return () => {
      window.removeEventListener("scroll", handleScrollButton);
    };
  }, []);
  return (
    <motion.div
      // ref={ref}
      className={`bg-player relative h-screen w-full bg-cover bg-center transition-all duration-300 ${
        currentBgColor != undefined
          ? `${currentBgColor.pageStyle} ${currentBgColor.buttonStyle}`
          : ""
      } flex flex-col relative ${scrolled ? "bg-clip-text" : ""} `}
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
      </div>{" "}
      <motion.div
        initial={{ opacity: 0, scale: 0.2, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{ delay: 1, duration: 1.5 }}
        className={` w-full relative h-max place-self-center flex flex-col my-28 transition-all duration-300 ${
          scrolled ? "text-transparent" : "text-red"
        } `}
      >
        <h1 className="font-extrabold text-6xl lg:text-9xl">DULWICH HAMLET</h1>
        <h2 className="font-bold text-5xl lg:text-8xl">WOMEN FIRST XI</h2>
      </motion.div>
      <div
        className={`transition-all duration-500 ${
          scrolled ? "opacity-100" : " opacity-0"
        }`}
      >
        <WatchUsPlay />
      </div>
    </motion.div>
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
