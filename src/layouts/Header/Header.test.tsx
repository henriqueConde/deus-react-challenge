import { describe, it } from 'vitest';
import { render, screen } from '@utils/customTestSetup';
import Header from './Header';

describe('<Header />', () => {
  it('should render correctly', () => {
    render(<Header />);

    const home = screen.getByText(/home/i);
    const languageDropdown = screen.getByText('en');

    expect(home).toBeInTheDocument();
    expect(languageDropdown).toBeInTheDocument();
  });
});
