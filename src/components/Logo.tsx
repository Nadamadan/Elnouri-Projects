import { Link } from "@/i18n";
import { inter } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export function Logo() {
  return (
    <Link
      href={"/"}
      className="relative mr-8 size-12 rounded-full bg-secondary flex-center dark:bg-secondary/70"
    >
      <h1
        className={cn(
          "translate-x-5 text-nowrap text-sm font-semibold",
          inter.className,
        )}
      >
        El-Nuri
      </h1>
    </Link>
  );
}
