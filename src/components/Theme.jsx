import PortfolioStore from "./useStore";
import AnimatedThemeToggler from "./AnimatedThemeToggler";

const ThemeToggle = () => {
  const theme = PortfolioStore((state) => state.theme);

  return (
    <span className={`${theme ? "text-black" : "text-white"} flex items-center gap-2 cursor-pointer`}>
      <AnimatedThemeToggler />
    </span>
  );
};

export default ThemeToggle;
