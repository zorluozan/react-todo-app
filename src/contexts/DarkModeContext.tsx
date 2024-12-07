import { createContext, useContext, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
});

const DarkModeProvider = ({ children }: Props) => {
  const isDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState<boolean>(
    isDarkMode ? JSON.parse(isDarkMode) : false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#161722";
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.body.style.backgroundColor = "#fff";
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const value: DarkModeContextType = {
    darkMode,
    toggleDarkMode,
  };
  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside of the DarkModeProvider");
  return context;
};

export { DarkModeProvider, useDarkMode };
