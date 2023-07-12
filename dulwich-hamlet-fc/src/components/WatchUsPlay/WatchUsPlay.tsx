import { WatchUsPlaySvg } from "./WatchUsPlaySvg";
import { motion } from "framer-motion";

export const WatchUsPlay = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileInView={{ y: -100 }}
      transition={{ duration: 2, delay: 1 }}
      className="h-fit flex place-items-center bg-off_white shadow-md "
    >
      <WatchUsPlaySvg />
    </motion.div>
  );
};
