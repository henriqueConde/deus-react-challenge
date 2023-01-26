import { describe, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@utils/customTestSetup';
import TextArea, { TextAreaProps } from './TextArea';

const text = 'This is my new text';
const mockOnInputChange = vi.fn();

const mockProps: TextAreaProps = {
  onInputChange: mockOnInputChange,
  value: text,
  label: 'the label',
  name: 'the-name',
};

describe('<TextArea />', () => {
  it('should render label and value', () => {
    render(<TextArea {...mockProps} />);

    const label = screen.getByLabelText(/the label/i);
    const value = screen.getByText(text);

    expect(label).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });

  it('should render correctly when changing value', async () => {
    render(<TextArea {...mockProps} />);
    const textArea = screen.getByRole('textbox');
    userEvent.type(textArea, text);

    await waitFor(() => {
      expect(textArea).toHaveValue(text);
      expect(mockOnInputChange).toHaveBeenCalledTimes(text.length);
    });
  });
});
