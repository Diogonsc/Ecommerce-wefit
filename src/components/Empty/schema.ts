import { z } from "zod";

export const emptySchema = z.object({
	title: z.string(),
	buttonText: z.string(),
	onButtonClick: z.function(),
});

export type Empty = z.infer<typeof emptySchema>;