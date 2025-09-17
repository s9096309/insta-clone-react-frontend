import { useLoaderData } from "react-router";
import type { LoaderFunctionArgs } from "react-router";
import { HighlightStory } from "~/components/HighlightStory";
import { highlightSchema } from "~/schemas/highlight.schema"; // Correct import
import { api } from "~/services/api";

// The loader receives 'params' which contains the dynamic part of the URL.
export async function loader({ params }: LoaderFunctionArgs) {
  const highlightId = params.id;

  try {
    const response = await api.get(`/highlights/${highlightId}`);
    const highlight = highlightSchema.parse(response.data); // Correct schema name
    return { highlight };
  } catch (error) {
    console.error(error);
    throw new Response("Highlight not found", { status: 404 });
  }
}

export default function HighlightDetail() {
  const { highlight } = useLoaderData<typeof loader>();
  return <HighlightStory highlight={highlight} />;
}