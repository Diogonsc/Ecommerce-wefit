import { z } from "zod";

export const priceSchema = z.number().positive();

export type Price = z.infer<typeof priceSchema>;

export type FormatPriceFunction = (price: Price) => string;
