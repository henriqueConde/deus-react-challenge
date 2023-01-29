import { describe, it, vi } from 'vitest';
import { render, screen } from '@utils/customTestSetup';
import CommentActions from './CommentActions';

const mockProps = {
  hasReplies: true,
  handleShowReplies: vi.fn(),
  showReplies: false,
};

describe('<CommentActions />', () => {
  it('should render actions buttons', async () => {
    render(<CommentActions {...mockProps} />);

    const showRepliesBtn = screen.getByRole('button', {
      name: /Show replies/i,
    });

    const editBtn = screen.getByRole('button', {
      name: /Edit/i,
    });

    const replyBtn = screen.getByRole('button', {
      name: /Reply/i,
    });

    expect(showRepliesBtn).toBeInTheDocument();
    expect(editBtn).toBeInTheDocument();
    expect(replyBtn).toBeInTheDocument();
  });

  it('should not render show replies btn if there no replies', () => {
    render(<CommentActions {...mockProps} hasReplies={false} />);
    const showRepliesBtn = screen.queryByRole('button', {
      name: /Show replies/i,
    });

    expect(showRepliesBtn).not.toBeInTheDocument();
  });
});
