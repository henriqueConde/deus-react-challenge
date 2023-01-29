import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: 'offlineFirst',
      staleTime: Infinity,
      cacheTime: Infinity,
    },
    mutations: {
      networkMode: 'offlineFirst',
    },
  },
});
