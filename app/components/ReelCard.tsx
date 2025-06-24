import type { Reel } from '~/schemas/reel.schema';

export function ReelCard({ reel }: { reel: Reel }) {
  return (
    <div className="w-full max-w-lg mx-auto rounded-lg overflow-hidden border bg-white mb-6">
      <div className="p-4">
        <p className="font-bold">webeet_user</p>
      </div>
      <img
        src={reel.video_url}
        alt={reel.caption || 'Instagram reel'}
        className="w-full h-auto aspect-square object-cover"
      />
      <div className="p-4">
        <p>
          <span className="font-bold mr-2">webeet_user</span>
          {reel.caption}
        </p>
      </div>
    </div>
  );
}
