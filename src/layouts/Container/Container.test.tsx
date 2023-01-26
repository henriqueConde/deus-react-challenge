import { describe, it } from 'vitest';
import { render, screen } from '@utils/customTestSetup';
import Container from './Container';

describe('<Container />', () => {
  it('should render header and language dropdown', () => {
    render(<Container />);

    const header = screen.getByTestId('header');
    const langDropdown = screen.getByTestId('lang-dropdown');

    expect(header).toBeInTheDocument();
    expect(langDropdown).toBeInTheDocument();
  });
});
