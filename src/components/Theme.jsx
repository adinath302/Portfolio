import { AiOutlineMoon } from "react-icons/ai";
import { IoSunnyOutline } from "react-icons/io5";
import PortfolioStore from "./useStore";
import { AnimatedThemeToggler } from "./AnimatedThemeToggler";
const ThemeToggle = () => {
  const theme = PortfolioStore((state) => state.theme);
  const toggle = PortfolioStore((state) => state.toggle);





  return (
    <div>
<span className={` ${theme ? "text-black" : "text-white"} flex items-center gap-2 cursor-pointer`}>
      <AnimatedThemeToggler />
      </span>
    </div>
  );
};

export default ThemeToggle;

