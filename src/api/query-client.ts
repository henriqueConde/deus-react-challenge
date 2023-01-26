import { QueryClient } from 'react-query';

const defaultQueryConfig = { staleTime: 100 };

export const queryClient = new QueryClient({
  defaultOptions: { queries: defaultQueryConfig },
});
