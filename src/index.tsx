import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';
import { AxiosInterceptor } from 'providers/AxiosInterceptor';

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: { retry: 0 },
    queries: {
      // re-render component only if used properties change (the ones destructed from useQuery/useMutate), not when any of the query props changes
      notifyOnChangeProps: 'tracked',
      // refetch on mount, but only when data is marked stale
      refetchOnMount: true,
      // make periodic updates, to be sure data is fresh
      staleTime: 5 * 1000 * 60 * 60,
      // garbage collect data when no query uses it anymore (this timer runs only when NO query uses specific cache data; if set to infinity, it can cause memory leaks and large memory usage)
      cacheTime: 3 * 1000 * 60 * 60,
      // when user comes back to the tab, always refetch all active queries (in production, users rarely switch tabs compared to dev)
      refetchOnWindowFocus: true,
      // always refetch after network connection was lost and reconnected
      refetchOnReconnect: 'always',
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <AxiosInterceptor>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </AxiosInterceptor>
  </React.StrictMode>,
);
