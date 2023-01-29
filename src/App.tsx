import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from '@api/query-client';
import Container from '@layouts/Container/Container';
import { Loading } from '@components/Loading';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

const Home = React.lazy(() => import('./pages/Home/Home'));
const SinglePost = React.lazy(() => import('./pages/SinglePost/SinglePost'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts/:id/:slug" element={<SinglePost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Container>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
