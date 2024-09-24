import { z } from "zod";

export const filtersSchema = z.object({
	limit: z.number().min(1).default(10),
	pageNumber: z.number().min(1).default(1),
	year: z.number().optional(),
	type: z.string().optional(),
	continent: z.string().optional(),
	country: z.string().optional(),
	city: z.string().optional(),
});

export type Filters = z.infer<typeof filtersSchema>;
