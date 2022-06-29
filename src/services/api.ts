import axios, { AxiosInstance } from 'axios';
import useSWR from 'swr';

export const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('@Letsfy:token')}`,
  },
});

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(
    url,
    async (url) => {
      const response = await api.get(url, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('@Letsfy:token')}`,
        },
      });

      return response.data;
    },
    { refreshInterval: 200 },
  );

  return { data, error };
}
