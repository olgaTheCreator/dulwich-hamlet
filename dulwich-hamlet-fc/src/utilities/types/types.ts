export type themeColor = "pink" | "dark" | "cyan" | "light";

export interface ThemeContextInterface {
  theme: themeColor;
  setTheme: React.Dispatch<React.SetStateAction<themeColor>>;
}

export interface ButtonPropsInterface {
  children: React.ReactNode;
  color: "primary" | "secondary";
}

export interface theme {
  "--theme-primary": string;
  "--theme-secondary": string;
  "--theme-text-base": string;
}
