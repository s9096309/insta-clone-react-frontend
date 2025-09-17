import type { Highlight } from "~/schemas/highlights.schema";

type Props = {
  highlight: Highlight;
};

export function HighlightStory({ highlight }: Props) {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center text-white">
      <img 
        src={highlight.cover_image_url} 
        alt={highlight.title ?? ""} 
        className="max-w-full max-h-[80vh] object-contain"
      />
      <h2 className="text-2xl mt-4">{highlight.title}</h2>
    </div>
  );
}