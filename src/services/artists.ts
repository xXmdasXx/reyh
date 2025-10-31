import { api } from "@/lib/Axios";

export type Artist = {
  id: string;
  name: string;
  role?: string;
  imageUrl: string;
  username?: string;
  bio?: string;
};

export type ArtistsApiResponse = any; // Unknown shape; parsed defensively

export async function fetchArtists(signal?: AbortSignal): Promise<Artist[]> {
  try {
    const response = await api.get("/users/artists", { signal });
    const data = response.data as ArtistsApiResponse;

    // Parse artists based on various possible API response formats
    let artistsSource: any[] = [];
    
    if (Array.isArray(data)) {
      artistsSource = data as any[];
    } else if (data && Array.isArray((data as any).artists)) {
      artistsSource = (data as any).artists as any[];
    } else if (data && Array.isArray((data as any).data)) {
      artistsSource = (data as any).data as any[];
    }

    // Normalize common keys to our Artist shape
    const artists: Artist[] = artistsSource.map((artist, idx) => ({
      id: artist?.id ?? artist?.artistId ?? artist?.user_id ?? `artist-${idx + 1}`,
      name: artist?.name ?? artist?.full_name ?? artist?.displayName ?? artist?.username ?? 'هنرمند',
      role: artist?.role ?? artist?.category ?? artist?.type ?? 'آرتیست',
      imageUrl: artist?.imageUrl ?? artist?.image ?? artist?.avatar ?? artist?.profile_picture ?? artist?.photo ?? '/defultAvatar.svg',
      username: artist?.username ?? undefined,
      bio: artist?.bio ?? artist?.description ?? undefined,
    }));

    return artists;
  } catch (err: any) {
    const isAbortDom = err instanceof DOMException && err.name === 'AbortError';
    const isAxiosCanceled = err?.name === 'CanceledError' || err?.code === 'ERR_CANCELED' || err?.message === 'canceled';
    if (isAbortDom || isAxiosCanceled) return [];
    throw err;
  }
}

