import { useLoaderData } from "react-router";
import { PostCard } from "~/components/PostCard";
import { taggedPostsSchema, type TaggedPost } from "~/schemas/tagged.schema";
import { api } from "~/services/api";

// This loader fetches and validates the tagged posts data
export async function loader() {
  try {
    const response = await api.get("/tagged/grid");
    // We use the Zod schema to validate the API response
    const taggedPosts = taggedPostsSchema.parse(response.data);
    return { taggedPosts };
  } catch (error) {
    console.error("Failed to load tagged posts:", error);
    throw new Response("Oh no! Something went wrong!", { status: 500 });
  }
}

// This component displays the data from the loader
export default function TaggedGrid() {
  const { taggedPosts } = useLoaderData<typeof loader>();

  return (
    <div className="grid grid-cols-3 gap-1 p-4">
      {/* We can reuse the PostCard, but need to adapt the data slightly */}
      {taggedPosts.map((taggedPost) => (
        <PostCard
          key={taggedPost.id}
          post={{
            id: taggedPost.id,
            img_url: taggedPost.img_url,
            caption: taggedPost.caption,
            // PostCard expects a created_at, but our tagged data doesn't have it.
            // We'll pass an empty string as a placeholder.
            created_at: "", 
          }}
        />
      ))}
    </div>
  );
}