import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
export default function Dialogin() {
	return (
		<Dialog>
			<DialogTrigger className="bg-rose-600 w-32 h-16 text-3xl rounded-2xl relative left-[280px] top-[200px]">
				Hello
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Say Hello</DialogTitle>
					<DialogDescription>
						This dialog to say hello <br></br>
						<input
							className="mt-6"
							type="text"
							placeholder="Enter Your name "
						/>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
