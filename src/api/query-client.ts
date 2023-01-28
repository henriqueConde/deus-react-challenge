import { QueryClient } from 'react-query';

const defaultQueryConfig = { staleTime: 0 };

export const queryClient = new QueryClient({
  defaultOptions: { queries: defaultQueryConfig },
});
