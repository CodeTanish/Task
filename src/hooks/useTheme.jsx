import React, { createContext, useContext, useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={isDarkMode ? 'bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
        <div className="absolute top-10 right-16 cursor-pointer" onClick={toggleTheme}>
          {isDarkMode ? <FiSun className="text-2xl text-yellow-300" /> : <FiMoon className="text-2xl text-gray-800" />}
        </div>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
