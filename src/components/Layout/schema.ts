import { z } from "zod";

export const layoutPropsSchema = z.object({
  children: z.any(), 
});

export type LayoutProps = z.infer<typeof layoutPropsSchema> & {
  children: React.ReactNode;
};
