import { LangToggle } from "../LangToggle";
import { Search } from "../Search";
import { ThemeToggle } from "../ThemeToggle";

export const Navbar = () => {
  return (
    <nav className="flex max-w-xs flex-1 gap-1 sm:gap-2">
      <Search />
      <LangToggle />
      <ThemeToggle />
    </nav>
  );
};
