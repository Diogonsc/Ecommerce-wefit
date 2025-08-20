import { z } from "zod";

export const queryConfigSchema = z.object({
  queryKey: z.array(z.string()),
  staleTime: z.number(),
  gcTime: z.number(),
  retry: z.boolean(),
  refetchOnWindowFocus: z.boolean(),
});

export type QueryConfig = z.infer<typeof queryConfigSchema>;
