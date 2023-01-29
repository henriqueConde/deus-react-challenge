import { describe, it } from 'vitest';
import { render, screen } from '@utils/customTestSetup';
import ErrorMessage from './ErrorMessage';

describe('<ErrorMessage />', () => {
  it('should render the heading', () => {
    const { container } = render(<ErrorMessage />);

    expect(
      screen.getByRole('heading', { name: /ErrorMessage/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
