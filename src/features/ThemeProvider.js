import React, { createContext, useState, useContext,useEffect} from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
      setTheme((curr) => {
          const newTheme = curr === "light" ? "dark" : "light";
          window.localStorage.setItem('data-theme', newTheme);
          return newTheme;
      });
  };
  useEffect(() => {
    const savedTheme = window.localStorage.getItem('data-theme');
    if (savedTheme) {
        setTheme(savedTheme);
    }
}, []);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
