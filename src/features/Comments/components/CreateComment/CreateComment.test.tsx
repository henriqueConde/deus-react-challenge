import { describe, it, vi } from 'vitest';
import { render, screen, waitFor } from '@utils/customTestSetup';
import userEvent from '@testing-library/user-event';
import CreateComment from './CreateComment';

const newComment = 'The new comment';
const mockOnSubmit = vi.fn();

const mockProps = {
  initialValues: {
    name: 'Joao',
    content: newComment,
  },
  onSubmit: mockOnSubmit,
  submitCommentState: {
    data: null,
    isLoading: false,
    error: '',
  },
};

describe('<CreateComment />', () => {
  it('should trigger on submit function', async () => {
    render(<CreateComment {...mockProps} />);
    const submitBtn = screen.getByRole('button', { name: /Submit Comment/i });
    expect(submitBtn).toBeInTheDocument();
    userEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
});
