import { WatchUsPlaySvg } from "./WatchUsPlaySvg";
import { motion } from "framer-motion";

export const WatchUsPlay = ({ scrolled }: { scrolled: boolean }) => {
  return (
    <motion.div
      transition={{ duration: 1 }}
      className={`h-fit flex place-items-center lg:w-full lg:max-w-xl lg:ml-20 transition-all duration-500 z-20  ${
        scrolled ? "opacity-100 invert-0" : " opacity-0"
      }`}
    >
      <WatchUsPlaySvg />
    </motion.div>
  );
};
