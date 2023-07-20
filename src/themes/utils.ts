/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ThemeColors, Theme } from "../utilities/types/types";

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    // @ts-expect-error linters mistake, no mistake on build
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    root.style.setProperty(cssVar, theme[cssVar]);
  });
}

export function createTheme({
  primary,
  primaryLight,
  backgroundTransparent,
  secondary,
  secondaryLight,
  textBase,
}: ThemeColors) {
  return {
    "--theme-primary": primary,
    "--theme-primary-light": primaryLight,
    "--theme-background-transparent": backgroundTransparent,
    "--theme-secondary": secondary,
    "--theme-secondary-light": secondaryLight,
    "--theme-text-base": textBase,
  };
}
