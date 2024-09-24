// import { Earth } from "lucide-react";
// import { CalendarDays } from "lucide-react";
// import { useTranslations } from "next-intl";

// export default function Buttons() {
// 	const t = useTranslations("Project");

// 	const buttons = [
// 		{ text: t("buton1"), icon: <Earth /> },
// 		{ text: t("buton2"), icon: <CalendarDays /> },
// 	];

// 	return (
// 		<div className="align-center relative top-[130px] mt-12 flex items-end justify-between lg:mt-0">
// 			{buttons.map((button, index) => (
// 				<div
// 					key={index}
// 					className="relative mx-2 flex max-w-72 items-center justify-center gap-5 rounded-full bg-muted px-6 py-3 text-foreground placeholder:text-foreground"
// 				>
// 					{button.text}
// 					<div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
// 						{button.icon}
// 					</div>
// 				</div>
// 			))}
// 		</div>
// 	);
// }
