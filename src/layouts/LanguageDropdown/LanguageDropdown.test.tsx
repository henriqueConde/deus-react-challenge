import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@utils/customTestSetup';
import LanguageDropdown from './LanguageDropdown';

describe('<LanguageDropdown />', () => {
  it('should render e as default value', () => {
    render(<LanguageDropdown />);

    const dropdown = screen.getByTestId('lang-dropdown') as HTMLSelectElement;

    expect(dropdown.value).to.equal('en');
  });

  it('should be able to change value', () => {
    render(<LanguageDropdown />);
    const dropdown = screen.getByTestId('lang-dropdown') as HTMLSelectElement;

    fireEvent.change(dropdown, { target: { value: 'pt' } });

    expect(dropdown.value).to.equal('pt');
  });
});
