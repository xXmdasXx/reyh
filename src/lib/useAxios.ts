// src/hooks/useAxios.ts
import { useState } from 'react';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { api } from '@/lib/Axios';

export function useAxios<T = any>() {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function execute(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.request<T>(config);
      setData(response.data);
      return response;
    } catch (error: any) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  return { data, error, loading, execute };
}