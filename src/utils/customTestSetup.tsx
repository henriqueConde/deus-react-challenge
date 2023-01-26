/* eslint-disable import/no-extraneous-dependencies */
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

type CustomRenderProps = Omit<RenderOptions, 'queries'>;

const queryClient = new QueryClient();

function customRender(
  children: ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) {
  return render(
    <StaticRouter location="/">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </QueryClientProvider>
    </StaticRouter>,
    renderOptions
  );
}

export * from '@testing-library/react';
export { customRender as render };
