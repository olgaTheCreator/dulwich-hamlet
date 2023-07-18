export type themeColor = "pink" | "dark" | "cyan" | "light";

export interface ThemeContextInterface {
  theme: themeColor;
  setTheme: React.Dispatch<React.SetStateAction<themeColor>>;
}
