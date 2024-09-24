import { LangToggle } from "../LangToggle";
import { ThemeToggle } from "../ThemeToggle";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <header className="container flex items-center justify-between rounded-b-xl bg-muted py-4">
      <Logo />
      <div className="gap-4 flex-center">
        <LangToggle />
        <ThemeToggle />
      </div>
    </header>
  );
};
