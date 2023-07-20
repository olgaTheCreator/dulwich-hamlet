import { Theme } from "../utilities/types/types";
import { createTheme } from "./utils";

export const pinkTheme: Theme = createTheme({
  primary: "rgba(226, 126, 187, 1)",
  primaryLight: "#FFA8DE",
  backgroundTransparent: "rgba(226, 126, 187, 0.9)",
  secondary: "#4D9296",
  secondaryLight: "#68DBE3",
  textBase: "black",
});
