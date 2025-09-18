import { useLoaderData } from "react-router";
import type { LoaderFunctionArgs } from "react-router";
import { HighlightStory } from "~/components/HighlightStory";
import { highlightSchema } from "~/schemas/highlights.schema"; // Correctly import the schema
import { api } from "~/services/api";

export async function loader({ params }: LoaderFunctionArgs) {
  try {
    const response = await api.get(`/highlights/${params.id}`);
    // Use the schema to parse and validate the data
    const highlight = highlightSchema.parse(response.data);
    return { highlight };
  } catch (error) {
    console.error(`Failed to load highlight ${params.id}:`, error);
    throw new Response("Highlight not found", { status: 404 });
  }
}

export default function HighlightDetail() {
  const { highlight } = useLoaderData<typeof loader>();
  // Render the HighlightStory component
  return <HighlightStory highlight={highlight} />;
}