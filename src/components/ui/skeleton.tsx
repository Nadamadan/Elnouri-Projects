import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
	return (
		<div
			className={cn(
				"before:animate-shimmer relative min-h-10 overflow-hidden rounded-xl bg-muted before:absolute before:inset-0 before:-translate-x-full before:border-t before:border-muted-foreground/60 before:bg-gradient-to-r before:from-transparent before:via-muted/80 before:to-transparent",
				className,
			)}
		/>
	);
}
