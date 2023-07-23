import { Theme } from "../utilities/types/types";
import { createTheme } from "./utils";

export const cyanTheme: Theme = createTheme({
  primary: "rgba(126, 226, 190, 1)",
  backgroundTransparent: "rgba(126, 226, 190, 0.9)",
  primaryLight: "#C7E8DC",
  secondary: "#386353",
  secondaryLight: "#63B094",
  textBase: "#332F2E",
});
