import { createContext, ReactNode } from "react";
import { UseTheme } from "../../hook/useTheme";

interface Props {
  children?: ReactNode
}

interface ThemeContextData {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextData>({
  theme: "light",
  setTheme: () => {
    throw new Error("setTheme não foi implementado");
  },
});

function ThemeProvider({ children }: Props) {
  const { setTheme, theme } = UseTheme();

  return (
    <ThemeContext.Provider value={{ setTheme, theme }} >
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
