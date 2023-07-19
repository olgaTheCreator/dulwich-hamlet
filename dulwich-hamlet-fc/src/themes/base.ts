import { Theme } from "../utilities/types/types";
import { createTheme } from "./utils";

export const baseTheme: Theme = createTheme({
  primary: "blue",
  primaryLight: "#4d4dff",
  secondary: "red",
  secondaryLight: "#ff4d4d",
  textBase: "white",
});
