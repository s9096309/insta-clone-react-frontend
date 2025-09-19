import { z } from "zod";

const highlightSchema = z.object({
  id: z.number(),
  cover_image_url: z.string().nullable(),
  title: z.string().nullable(),
});

const highlightsSchema = z.array(highlightSchema);
type Highlight = z.infer<typeof highlightSchema>;
export { highlightSchema, highlightsSchema };
export type { Highlight };