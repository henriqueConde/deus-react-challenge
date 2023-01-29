import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: 'offlineFirst',
      staleTime: 0,
    },
    mutations: {
      networkMode: 'offlineFirst',
    },
  },
});
