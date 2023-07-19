export type ThemeColor = "pink" | "dark" | "cyan" | "light";

export interface ThemeContextInterface {
  theme: ThemeColor;
  setTheme: React.Dispatch<React.SetStateAction<ThemeColor>>;
}

export interface ButtonPropsInterface {
  children: React.ReactNode;
  color: "primary" | "secondary";
}

export interface Theme {
  "--theme-primary": string;
  "--theme-secondary": string;
  "--theme-text-base": string;
}
