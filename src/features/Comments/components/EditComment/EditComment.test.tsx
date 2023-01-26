import { describe, it, vi } from 'vitest';
import { render, screen, waitFor } from '@utils/customTestSetup';
import userEvent from '@testing-library/user-event';
import EditComment from './EditComment';

const editedComment = 'The edited comment';
const mockOnSubmit = vi.fn();

const mockProps = {
  initialValues: {
    name: 'Joao',
    content: editedComment,
  },
  onSubmit: mockOnSubmit,
  submitCommentState: {
    data: null,
    isLoading: false,
    error: '',
  },
};

describe('<EditComment />', () => {
  it('should trigger on submit function', async () => {
    render(<EditComment {...mockProps} />);
    const submitBtn = screen.getByRole('button', { name: /Submit Comment/i });
    expect(submitBtn).toBeInTheDocument();
    userEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
});
