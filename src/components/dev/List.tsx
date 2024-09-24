// import { useTranslations } from "next-intl";
// import Link from "next/link";

// export default function List() {
// 	const t = useTranslations("List");
// 	const words = ["word1", "word2", "word3", "word4", "word5", "word6"];

// 	return (
// 		<div className="">
// 			<div className="relative top-20 grid h-16 grid-cols-3 gap-y-2 font-sans lg:grid-cols-7">
// 				{words.map((word, index) => (
// 					<Link
// 						key={index}
// 						href=""
// 						className="flex-1 content-center border-l-2 border-solid border-accent-foreground bg-green-800 text-center text-2xl text-accent-foreground focus:bg-secondary active:bg-secondary"
// 					>
// 						{t(word)}
// 					</Link>
// 				))}
// 				<Link
// 					href=""
// 					className="flex-1 content-center border-l-2 bg-green-800 text-center text-2xl text-accent-foreground"
// 				>
// 					<select className="bg-green-800">
// 						<option>{t("word7")}</option>
// 						<option></option>
// 					</select>
// 				</Link>
// 			</div>
// 		</div>
// 	);
// }
