import { useLoaderData } from 'react-router';
import { api } from '~/services/api';
import { reelsSchema, type Reel } from '~/schemas/reel.schema';
import { ReelCard } from '~/components/ReelCard';

export async function loader() {
  try {
    const response = await api.get('/reels/grid');
    return reelsSchema.parse(response.data);
  } catch (error) {
    console.error('Failed to load reels:', error);
    throw new Response('Could not load reels.', { status: 500 });
  }
}

export default function ReelsGrid() {
  const reels = useLoaderData() as Reel[];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {reels.map((reel) => (
        <ReelCard key={reel.id} reel={reel} />
      ))}
    </div>
  );
}
