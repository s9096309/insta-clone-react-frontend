import { z } from 'zod';

// Zod schema for a single post object
export const reelSchema = z.object({
  id: z.number(),
  video_url: z.string().url(),
  caption: z.string().nullable(),
  created_at: z.string(),
});

// Zod schema for an array of posts
export const reelsSchema = z.array(reelSchema);

// We infer the TypeScript type from the Zod schema.
export type Reel = z.infer<typeof reelSchema>;
