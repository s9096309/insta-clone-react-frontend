import type { Highlight } from "~/schemas/highlights.schema";

export function HighlightGridItem({ highlight }: { highlight: Highlight }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-pink-500 flex items-center justify-center">
        {highlight.cover_image_url ? (
          <img
            src={highlight.cover_image_url}
            alt={highlight.title || "Highlight"}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300"></div>
        )}
      </div>
      <p className="mt-2 text-sm font-semibold">{highlight.title}</p>
    </div>
  );
}