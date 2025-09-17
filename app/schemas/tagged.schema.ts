import { z } from "zod";

export const TaggedPostSchema = z.object({
  id: z.number(),
  img_url: z.string().url(),
  caption: z.string().nullable(),
  user_who_tagged: z.string(),
});

export const taggedPostsSchema = z.array(TaggedPostSchema);

export type TaggedPost = z.infer<typeof TaggedPostSchema>;