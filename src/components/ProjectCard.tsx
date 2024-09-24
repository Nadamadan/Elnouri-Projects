
import { StyledCard } from "./ProjectContainer";
import { cn } from "@/lib/utils";
import { ProjectSummary } from "@/api";
import { formatAdress } from "@/lib/utils";

export const ProjectCard = ({ project }: { project: ProjectSummary }) => {
  const { city, continent, country, name, imageUrl, id } = project;
  const formattedAddress = formatAdress(city, country, continent);

  return (
    <StyledCard
      href={`/project/${id}`}
      imageUrl={imageUrl}
      imageAlt={name}
      imageWidth={230}
      imageHeight={200}
      name={name}
      formattedAddress={formattedAddress}
    />
  );
};
