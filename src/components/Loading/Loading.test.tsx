import { describe, it } from 'vitest';
import { render, screen } from '@utils/customTestSetup';
import Loading from './Loading';

describe('<Loading />', () => {
  it('should render properly', () => {
    render(<Loading />);
    const loadingSpinner = screen.getByTestId('spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });
});
