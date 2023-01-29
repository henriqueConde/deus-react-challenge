import { describe, it } from 'vitest';
import { render, screen } from '@utils/customTestSetup';
import ErrorMessage from './ErrorMessage';

const mockProps = {
  children: '<p>Child element</p>',
};

describe('<ErrorMessage />', () => {
  it('should render the heading', () => {
    const { container } = render(<ErrorMessage {...mockProps} />);

    const child = screen.getByText(/Child element/i);

    expect(child).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
