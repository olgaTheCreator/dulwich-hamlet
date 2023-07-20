import { createContext } from "react";
import { ThemeContextInterface } from "../types/types";

export const ThemeContext = createContext<ThemeContextInterface | null>(null);
