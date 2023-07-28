import { changeThemeButtonsVariants } from "../../themes/colorVariants";
import { ThemeButtonPropsInterface } from "../../utilities/types/types";
import { motion } from "framer-motion";

export const ThemeButton = (props: ThemeButtonPropsInterface) => {
  const { color } = props;
  return (
    <motion.button
      className={`${changeThemeButtonsVariants[color]} h-8 w-8 m-2 border-4 transition-all duration-300`}
    ></motion.button>
  );
};
