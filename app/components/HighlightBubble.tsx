import { Link } from "react-router";
import type { Highlight } from "~/schemas/highlights.schema";

type Props = {
  highlight: Highlight;
};

export function HighlightBubble({ highlight }: Props) {
  return (
    <Link to={`/profile/highlights/${highlight.id}`} className="text-center">
      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 mx-auto">
        <img
          src={highlight.cover_image_url}
          alt={highlight.title ?? "Highlight cover"}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-sm mt-1 truncate">{highlight.title}</p>
    </Link>
  );
}