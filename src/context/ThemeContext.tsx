import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext({});

const selectedTheme = localStorage.getItem("selectedTheme");

interface ThemeContextChildren {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeContextChildren) => {
  const [theme, setTheme] = useState(selectedTheme);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const setMode = () => {
    document.querySelector("body")?.setAttribute("data-theme", theme);
  };

  useEffect(() => {
    setMode();
    localStorage.setItem("selectedTheme", theme);
  }, [theme]);

  const data = { theme, toggleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };

export default ThemeContext;
