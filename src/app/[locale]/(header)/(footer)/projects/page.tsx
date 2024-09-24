import type { Filters, ProjectSummary } from "@/api";
import { setRequestLocale } from "@/i18n";
import { API, fetcher } from "@/api";
import { getLocale } from "@/i18n";
import { filtersSchema } from "@/schema/filters";
import { getTranslations } from "next-intl/server";
import { ProjectCard } from "@/components/ProjectCard";
import { Navigation } from "@/components/Navigation";
import { Title } from "@/components/Title";

const getData = async (filters: Filters) => {
  const lang = await getLocale();

  // todo: show error message if filters are invalid
  const validFilters = filtersSchema.parse(filters);

  const { data } = await fetcher<ProjectSummary[], Filters>(API.getProjects, {
    method: "POST",
    body: validFilters,
    lang,
    revalidate: 0,
  });

  // todo: remove this when api is fixed
  data.map((el) => {
    if (el.imageUrl.includes("localhost")) {
      el.imageUrl = "";
    }
    return el;
  });

  return data;
};

interface Props {
  params: {
    locale: Lang;
  };
  searchParams: Filters;
}
async function Page({ params, searchParams }: Props) {
  setRequestLocale(params.locale);

  const data = await getData(searchParams);
  const t = await getTranslations("Projects.Headers");

  return (
    <div>
      <Title as="h1" text={t("projects")} className="mb-4" />

      <Navigation />

      <div className="grid grid-cols-2 gap-4 py-14 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {data.map((el) => (
          <ProjectCard project={el} key={el.id} />
        ))}
      </div>
    </div>
  );
}

export default Page;
