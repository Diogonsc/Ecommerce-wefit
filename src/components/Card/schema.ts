import { z } from "zod";

export const cardSchema = z.object({
	id: z.number(),
	title: z.string(),
	price: z.number(),
	image: z.string(),
});

export type Card = z.infer<typeof cardSchema>;