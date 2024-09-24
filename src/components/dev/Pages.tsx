import { Link } from "@/i18n";
import { useTranslations } from "next-intl";

export const Pages = () => {
	const t = useTranslations();

	const pages = [
		{
			name: "Home",
			href: "/home",
		},
		{
			name: "About",
			href: "/about",
		},
		{
			name: "Projects",
			href: "/projects",
		},
	];

	return (
		<div className="mx-auto grid w-full max-w-5xl grid-cols-3 gap-4">
			{pages.map((el) => (
				<Link
					key={el.name}
					href={el.href}
					className="aspect-video rounded-3xl bg-muted p-4 text-2xl font-medium capitalize shadow transition flex-center hover:border"
				>
					{el.name}
				</Link>
			))}
		</div>
	);
};
