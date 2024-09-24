import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
	return (
		<Accordion type="single" collapsible className="w-full">
			<AccordionItem value="item-1">
				<AccordionTrigger>What is TypeScript?</AccordionTrigger>
				<AccordionContent>
					1.TypeScript is a Superset of JavaScript
				</AccordionContent>
				<AccordionContent>
					2.Static Typing for Improved Code Quality
				</AccordionContent>
				<AccordionContent>3.Enhanced Developer Experience</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-2">
				<AccordionTrigger>What is TailwindCSS?</AccordionTrigger>
				<AccordionContent>1.Utility-First CSS Framework</AccordionContent>
				<AccordionContent>2.Responsive Design Built-In</AccordionContent>
				<AccordionContent>3.Developer Experience Focused</AccordionContent>
			</AccordionItem>
			<AccordionItem value="item-3">
				<AccordionTrigger>What is NextJs?</AccordionTrigger>
				<AccordionContent>1.React Framework for Production</AccordionContent>
				<AccordionContent>2.Developer Experience Focused</AccordionContent>
				<AccordionContent>3.Flexible Deployment Options</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}
