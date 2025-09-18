import { Outlet, useLoaderData } from "react-router";
import { HighlightBubble } from "~/components/HighlightBubble";
import { highlightsSchema } from "~/schemas/highlights.schema";
import { api } from "~/services/api";

export async function loader() {
  try {
    const response = await api.get("/highlights");
    const highlights = highlightsSchema.parse(response.data);
    return { highlights };
  } catch (error) {
    console.error("Failed to load highlights:", error);
    throw new Response("Oh no! Something went wrong!", { status: 500 });
  }
}

export default function HighlightsLayout() {
  // Add <typeof loader> to make the data type-safe
  const { highlights } = useLoaderData<typeof loader>();

  return (
    <div>
      <div className="p-4 flex space-x-4 border-b border-gray-200">
        {highlights.map((highlight) => (
          <HighlightBubble key={highlight.id} highlight={highlight} />
        ))}
      </div>
      <Outlet />
    </div>
  );
}