import { API, type Statistics, fetcher } from "@/api";
import { getLocale } from "@/i18n";
import { getFormatter, getTranslations } from "next-intl/server";
import { BorderGradient } from "./BorderGradient";

const getData = async () => {
  const lang = await getLocale();

  const { data } = await fetcher<Statistics>(API.statistics, {
    lang,
  });

  return data;
};

interface StatisticsItem {
  title: string;
  description: string;
  value: number;
}

export async function Statistics() {
  const data = await getData();
  const t = await getTranslations("About.Statistics");
  const f = await getFormatter();

  const {
    numberOfProjects,
    numberOfProjectsWithProfit,
    costOfProjects,
    costOfProjectsWithProfit,
  } = data;

  const cards: StatisticsItem[] = [
    {
      title: t("project"),
      description: t("projectsNum"),
      value: numberOfProjects,
    },
    {
      title: t("currency"),
      description: t("projectsCost"),
      value: costOfProjects,
    },
    {
      title: t("endowment"),
      description: t("endowmentsNum"),
      value: numberOfProjectsWithProfit,
    },
    {
      title: t("currency"),
      description: t("endowmentsCost"),
      value: costOfProjectsWithProfit,
    },
  ];

  return (
    <div className="mx-auto grid min-h-64 max-w-6xl grid-cols-2 gap-2 sm:gap-4 sm:text-white md:grid-cols-4 lg:gap-12">
      {cards.map(({ title, description, value }, index) => (
        <div
          className="relative p-2 flex-center max-sm:rounded-2xl max-sm:bg-muted max-sm:text-xs sm:p-4 odd:sm:max-md:row-start-1"
          key={description}
        >
          <BorderGradient
            to={index % 2 === 0 ? "top" : "bottom"}
            className="max-sm:hidden"
          />
          <div className="text-center sm:mt-8">
            <p className="text-xl font-medium sm:mb-2 sm:text-3xl">
              {f.number(value)}
            </p>
            <p className="mb-2 sm:mb-6">{title}</p>
            <p className="line-clamp-2 leading-tight">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
