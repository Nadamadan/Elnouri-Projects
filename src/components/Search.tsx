"use client";

import { useRouter } from "@/i18n";
import { SearchIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export const Search = () => {
  const router = useRouter();
  const t = useTranslations("Home");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const queryInput = form.elements.namedItem("query") as HTMLInputElement;
    const query = queryInput.value.trim();

    if (query) {
      router.push(`?q=${query}`);
      queryInput.blur();
    }
  };

  return (
    <form
      autoComplete="off"
      className="h-9 flex-1 gap-2 rounded-md bg-foreground px-4 py-2 text-sm text-background flex-center"
      onSubmit={handleSubmit}
    >
      <label className="sr-only">{t("search")}</label>
      <input
        type="text"
        placeholder={t("search")}
        className="w-full bg-transparent outline-none"
        name="query"
      />
      <button type="submit" title={t("search")}>
        <SearchIcon size={20} />
      </button>
    </form>
  );
};
