import { Theme } from "../utilities/types/types";

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    // @ts-expect-error linters mistake, no mistake on build
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    root.style.setProperty(cssVar, theme[cssVar]);
  });
}
