import { setRequestLocale } from "@/i18n";

export default function Page({ params }: { params: { locale: Lang } }) {
	setRequestLocale(params.locale);

	return (
		<div className="h-screen flex-center">
			<h1 className="text-5xl">Endowments Reports</h1>
		</div>
	);
}
