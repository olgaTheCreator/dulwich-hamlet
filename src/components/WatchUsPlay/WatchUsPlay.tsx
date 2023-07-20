import { WatchUsPlaySvg } from "./WatchUsPlaySvg";
import { motion, useScroll } from "framer-motion";

export const WatchUsPlay = () => {
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
  return (
    <motion.div
      transition={{ duration: 1 }}
      className={`h-fit z-50 flex place-items-center `}
    >
      <WatchUsPlaySvg />
    </motion.div>
  );
};
