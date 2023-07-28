import { motion } from "framer-motion";
import { LandingPageProps } from "../../utilities/types/types";
import { backGroundVariants } from "../../themes/colorVariants";

const LandingPage = (props: LandingPageProps) => {
  const { scrolled, children } = props;

  return (
    <div
      className={`bg-player ${
        backGroundVariants["primary"]
      } bg-cover bg-top relative h-screen w-full flex flex-col bg-blend-luminosity  ${
        scrolled ? "bg-clip-text" : ""
      }`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.2, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{ delay: 1, duration: 1.5 }}
        className={` w-full relative h-max place-self-center flex flex-col mt-28 mb-8 transition-all ease-out duration-300  ${
          scrolled ? "text-transparent" : "text-red"
        } `}
      >
        <h1 className="font-extrabold text-6xl lg:text-9xl">DULWICH HAMLET</h1>
        <h2 className="font-bold text-5xl lg:text-8xl">WOMEN FIRST XI</h2>
      </motion.div>
      {children}
    </div>
  );
};

export default LandingPage;
