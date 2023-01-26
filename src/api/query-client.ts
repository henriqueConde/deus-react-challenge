import { QueryClient } from 'react-query';

const defaultQueryConfig = { staleTime: 10000 };

export const queryClient = new QueryClient({
  defaultOptions: { queries: defaultQueryConfig },
});
