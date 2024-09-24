import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatAdress(city: string, country: string, continent: string) {
	return `${continent} - ${country} - ${city}`;
}

export function sleep(ms: number = 2000) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
