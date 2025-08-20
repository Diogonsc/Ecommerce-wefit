import { z } from "zod";

export const productsResponseSchema = z.object({
  products: z.array(z.object({
    id: z.number(),
    title: z.string(),
    price: z.number(),
    image: z.string(),
  })),
});

export const errorResponseSchema = z.object({
  products: z.array(z.never()),
});

export type ProductsResponse = z.infer<typeof productsResponseSchema>;
export type ErrorResponse = z.infer<typeof errorResponseSchema>;
