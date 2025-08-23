import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme on mount - ALWAYS START LIGHT
  useEffect(() => {
    const root = document.documentElement;
    
    // Force light mode on initialization
    root.classList.remove('dark');
    root.style.colorScheme = 'light';
    root.style.backgroundColor = 'white';
    root.style.color = '#374151';
    
    // Only check for saved dark mode preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
      root.style.backgroundColor = '#0f172a';
      root.style.color = '#f1f5f9';
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    const root = document.documentElement;
    
    if (newDarkMode) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
      root.style.backgroundColor = '#0f172a';
      root.style.color = '#f1f5f9';
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
      root.style.backgroundColor = 'white';
      root.style.color = '#374151';
      localStorage.setItem('theme', 'light');
    }
  };

  const value = {
    isDarkMode,
    toggleTheme,
    theme: isDarkMode ? 'dark' : 'light'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;