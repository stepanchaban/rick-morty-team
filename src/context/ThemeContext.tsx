import { Theme } from '@projectTypes/index';
import { createContext, useContext, useState, ReactNode } from 'react';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem('theme') ?? 'light') as Theme,
  );

  const toggleTheme = (): void => {
    const themeChange = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', `${themeChange}`);
    setTheme(themeChange);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
