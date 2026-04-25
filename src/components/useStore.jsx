import { create } from "zustand";

const PortfolioStore = create((set, get) => {
  const isDark = localStorage.getItem('theme') === 'dark';
  const initialTheme = !isDark; // true light, false dark

  const setThemeClass = (theme) => {
    const isDarkMode = !theme;
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  };

  return {
    theme: initialTheme,
    toggle: () => {
      set((state) => {
        const newTheme = !state.theme;
        setThemeClass(newTheme);
        return { theme: newTheme };
      });
    },
  };
});

export default PortfolioStore;