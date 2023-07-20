export type ThemeColor = "pink" | "dark" | "cyan" | "light";

export interface ThemeContextInterface {
  theme: ThemeColor;
  setTheme: React.Dispatch<React.SetStateAction<ThemeColor>>;
}

export interface ButtonPropsInterface
  extends React.ComponentPropsWithoutRef<"input"> {
  children?: React.ReactNode;
  color: "primary" | "secondary";
}

export interface ThemeButtonPropsInterface
  extends React.ComponentPropsWithoutRef<"input"> {
  color: ThemeColor;
}

export interface ThemeColors {
  primary: string;
  primaryLight: string;
  secondary: string;
  secondaryLight: string;
  textBase: string;
}
export interface Theme {
  "--theme-primary": ThemeColors["primary"];
  "--theme-primary-light": ThemeColors["primaryLight"];
  "--theme-secondary": ThemeColors["secondary"];
  "--theme-secondary-light": ThemeColors["secondaryLight"];
  "--theme-text-base": ThemeColors["textBase"];
}
