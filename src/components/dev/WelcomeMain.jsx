import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import WelcomeText from "./WelcomeText";
export default function WelcomeMain() {
	return (
		<div className=" flex flex-col justify-center items-center  ">
			<div className="">
				<Image
					src={"/images/Elnouri.jpg"}
					width={230}
					height={230}
					className="rounded-full"
					alt=""
				/>
			</div>
			<div>
				<WelcomeText />
			</div>

			<div className="font-sans mt-8 ">
				<Link href="/" className={buttonVariants({ variant: "outline" })}>
					ابدء الان
				</Link>
			</div>
		</div>
	);
}
