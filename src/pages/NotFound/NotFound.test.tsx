import { describe, it } from 'vitest';
import { render, screen } from '@utils/customTestSetup';
import NotFound from './NotFound';

describe('<NotFound />', () => {
  it('should render', () => {
    render(<NotFound />);
    const notFoundTitle = screen.getByText('Not Found');
    expect(notFoundTitle).toBeInTheDocument();
  });
});
