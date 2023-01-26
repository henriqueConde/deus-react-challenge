import { describe, it, vi } from 'vitest';
import { render, screen } from '@utils/customTestSetup';
import Dropdown, { DropdownProps } from './Dropdown';

const mockProps: DropdownProps = {
  name: 'language',
  selectValue: '',
  onInputChange: vi.fn(),
  optionsData: [
    {
      value: 'pt',
    },
  ],
  defaultValue: 'language',
};

describe('<Dropdown />', () => {
  it('should render dropdown correctly with disabled default option', () => {
    render(<Dropdown {...mockProps} />);

    const selectedDefaultOption = screen.getByRole('option', {
      name: 'language',
    }) as HTMLSelectElement;
    expect(selectedDefaultOption).toBeInTheDocument();
    expect(selectedDefaultOption.disabled).toBeTruthy();
  });

  it('should render dropdown correctly with selected option', () => {
    const newState = {
      ...mockProps,
      selectValue: 'pt',
    };
    render(<Dropdown {...newState} />);

    const selectedOption = screen.getAllByRole('option', {
      name: 'pt',
    }) as HTMLSelectElement[];

    const selectedDefaultOption = screen.queryByRole('option', {
      name: 'language',
    }) as HTMLSelectElement;

    expect(selectedOption[0].value).toBe('pt');
    expect(selectedDefaultOption).not.toBeInTheDocument();
  });
});
