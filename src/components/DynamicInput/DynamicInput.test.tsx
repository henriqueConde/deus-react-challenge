import { describe, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@utils/customTestSetup';
import DynamicInput, { DynamicInputProps } from './DynamicInput';

const text = 'This is my new text';
const mockOnInputChange = vi.fn();

const mockProps: DynamicInputProps = {
  onInputChange: mockOnInputChange,
  name: 'inputName',
  type: 'text',
  value: text,
  placeholder: 'placeholder',
};

describe('<DynamicInput />', () => {
  it('should render correctly when changing value', async () => {
    render(<DynamicInput {...mockProps} />);

    const input = screen.getByRole('textbox');
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(mockOnInputChange).toHaveBeenCalledTimes(text.length);
    });
  });

  it('Renders with placeholder', () => {
    render(<DynamicInput {...mockProps} />);

    expect(screen.getByPlaceholderText('placeholder')).toBeInTheDocument();
  });

  it('Renders with error', () => {
    const newState: DynamicInputProps = {
      ...mockProps,
      error: 'Error message',
    };
    render(<DynamicInput {...newState} />);

    expect(screen.getByText('Error message')).toBeInTheDocument();
  });
});
