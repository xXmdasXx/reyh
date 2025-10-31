import { useEffect, useMemo, useState } from 'react';
import { fetchArtists, Artist } from '@/services/artists';

type UseArtistsResult = {
  artists: Artist[];
  loading: boolean;
  error: Error | null;
  refetch: () => void;
};

export function useArtists(): UseArtistsResult {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [reloadKey, setReloadKey] = useState<number>(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetchArtists(controller.signal)
      .then((res) => {
        setArtists(res);
      })
      .catch((err) => {
        // Ignore cancellation errors (Axios CanceledError or AbortController)
        const isAbortDom = err instanceof DOMException && err.name === 'AbortError';
        const isAxiosCanceled = err?.name === 'CanceledError' || err?.code === 'ERR_CANCELED' || err?.message === 'canceled';
        if (isAbortDom || isAxiosCanceled) return;
        
        console.error('Error fetching artists:', err);
        setError(err);
        setArtists([]);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [reloadKey]);

  const refetch = () => setReloadKey((k) => k + 1);

  return useMemo(() => ({ artists, loading, error, refetch }), [artists, loading, error]);
}

