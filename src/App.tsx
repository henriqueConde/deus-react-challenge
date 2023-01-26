import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Home } from '@pages/Home';
import Container from '@layouts/Container/Container';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from '@api/query-client';
import { NotFound } from '@pages/NotFound';
import { SinglePost } from '@pages/SinglePost';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/:id/:slug" element={<SinglePost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
