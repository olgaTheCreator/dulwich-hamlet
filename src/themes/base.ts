import { Theme } from "../utilities/types/types";
import { createTheme } from "./utils";

export const baseTheme: Theme = createTheme({
  primary: "transparent",
  primaryLight: "#E6FFFFFF",
  backgroundTransparent: "rgba(255,255,255,0.9)",
  secondary: "white",
  secondaryLight: "#ff4d4d",
  textBase: "#18173C",
});
