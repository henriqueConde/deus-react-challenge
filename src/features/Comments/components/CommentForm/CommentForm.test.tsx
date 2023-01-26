import { describe, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@utils/customTestSetup';
import CommentForm, { CommentFormProps } from './CommentForm';

const mockHandleSubmit = vi.fn();

const mockCommentFormProps: CommentFormProps = {
  handleSubmit: mockHandleSubmit,
  values: {
    name: 'Joao',
    content: 'My content',
  },
  isSubmittingComment: false,
  handleInput: vi.fn(),
  fieldError: null,
};

describe('<CommentForm />', () => {
  it('should render fields, labels and submit button', () => {
    render(<CommentForm {...mockCommentFormProps} />);

    const commentLabel = screen.getByLabelText('Make a Comment');
    const commentContent = screen.getByText('My content');
    const nameLabel = screen.getByLabelText('Name');
    const submitBtn = screen.getByRole('button', { name: /Submit Comment/i });

    expect(commentLabel).toBeInTheDocument();
    expect(commentContent).toBeInTheDocument();
    expect(nameLabel).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  it('should call handleSubmit function when form is submited', async () => {
    render(<CommentForm {...mockCommentFormProps} />);

    const submitBtn = screen.getByRole('button', { name: /Submit Comment/i });
    userEvent.click(submitBtn);

    await waitFor(() => {
      expect(mockHandleSubmit).toHaveBeenCalled();
    });
  });
});
