import { Link, setRequestLocale } from "@/i18n";

import { API, type ProjectDetail, fetcher } from "@/api";
import { getLocale } from "@/i18n";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin } from "lucide-react";
import { formatAdress } from "@/lib/utils";
import { getFormatter, getTranslations } from "next-intl/server";

const getData = async (id: number) => {
  const lang = await getLocale();

  const { data } = await fetcher<ProjectDetail>(API.getProject(id), {
    lang,
  });

  return data;
};

interface Props {
  params: {
    locale: Lang;
    id: string;
  };
}

export default async function Page({ params }: Props) {
  setRequestLocale(params.locale);

  const id = parseInt(params.id, 10);

  if (isNaN(id)) {
    return <div>Invalid ID</div>;
  }

  const data = await getData(id);

  const t = await getTranslations("Projects");
  const f = await getFormatter();

  const {
    imageUrl,
    name,
    city,
    continent,
    country,
    about,
    area,
    cost: _,
    endTime,
    startTime,
  } = data;

  const address = formatAdress(city, country, continent);

  return (
    <div>
      <div className="relative h-screen max-h-[32rem] sm:max-h-[48rem] xl:max-h-none">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="absolute inset-0 -z-10 object-cover"
          priority
        />

        <div className="container py-4">
          <div className="flex items-center justify-between gap-4">
            <Badge>
              <Link href={"/projects"}>
                <ArrowLeft className="rtl:rotate-180" />
              </Link>
              <span className="max-sm:sr-only">{name}</span>
            </Badge>
            <Badge className="max-w-xs flex-1 justify-end rtl:flex-row-reverse">
              {address}
              <MapPin />
            </Badge>
          </div>
        </div>
      </div>

      <div className="container space-y-6 py-6 *:w-full sm:space-y-12 sm:py-12">
        <Badge
          variant={"outline"}
          className="mx-auto max-w-xs p-4 flex-center max-sm:rounded-xl"
        >
          {t("Headers.details")}
        </Badge>

        <div className="mx-auto max-w-6xl rounded-xl bg-background px-2 py-6 shadow sm:rounded-3xl">
          <h1 className="mx-auto mb-6 max-w-sm border-b pb-6 text-center text-2xl font-semibold text-secondary-blue">
            {name}
          </h1>
          <div className="pb-12 text-center [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-semibold [&_p]:mx-auto [&_p]:mb-8 [&_p]:max-w-prose">
            <h2>{t("Headers.about")}</h2>
            <p>{about}</p>
            <h2>{t("Headers.areaAndTimeline")}</h2>
            <p>
              {t("areaAndTimeline", {
                start: f.dateTime(new Date(startTime), "date"),
                end: f.dateTime(new Date(endTime), "date"),
                area: f.number(area),
              })}
            </p>
            <h2>{t("Headers.scope")}</h2>
            <p>
              {t("servedArea", {
                size: f.number(SERVED_AREA.size),
                name: SERVED_AREA.name,
                population: f.number(SERVED_AREA.population),
              })}
            </p>
            <h2>{t("Headers.cost")}</h2>
            <div className="flex-wrap gap-4 flex-center">
              {COST.map((el) => (
                <Badge key={el.currency}>
                  {f.number(el.value)}
                  <span>{el.currency}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dummy data until we get the real one
const SERVED_AREA = {
  size: 100,
  name: "Egyption Museum",
  population: 1500,
};

const COST = [
  {
    currency: "دينار كويتي",
    value: 1000,
  },
  {
    currency: "دولار",
    value: 500,
  },
  {
    currency: "العملة المحلية",
    value: 200,
  },
];
