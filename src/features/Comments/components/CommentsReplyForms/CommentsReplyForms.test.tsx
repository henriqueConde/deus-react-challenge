import { describe, it, vi } from 'vitest';
import { render, screen } from '@utils/customTestSetup';
import CommentActionsStateProvider from '@features/Comments/context/CommentActionsStateContext';
import CommentsReplyForms from './CommentsReplyForms';
import * as CommentActionsStateContext from '../../context/CommentActionsStateContext';

const mockProps = {
  id: 1,
  parentId: 1,
  content: 'content',
  user: 'Joao',
};

const contextValues = CommentActionsStateContext.initialState;

describe('<CommentsReplyForms />', () => {
  it('should render create comment form properly', () => {
    vi.spyOn(
      CommentActionsStateContext,
      'useCommentActionsStateContext'
    ).mockImplementation(() => ({
      ...contextValues,
      showCommentForm: true,
    }));
    render(
      <CommentActionsStateProvider>
        <CommentsReplyForms {...mockProps} />
      </CommentActionsStateProvider>
    );
    const commentLabel = screen.getByLabelText('Make a Comment');
    const textArea = screen.getByTestId('textarea');
    const nameLabel = screen.getByLabelText('Name');
    const submitBtn = screen.getByRole('button', { name: /Submit Comment/i });
    const editForm = screen.queryByTestId('edit-comment-form');
    const createForm = screen.getByTestId('create-comment-form');

    expect(commentLabel).toBeInTheDocument();
    expect(textArea).toBeInTheDocument();
    expect(nameLabel).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    expect(editForm).not.toBeInTheDocument();
    expect(createForm).toBeInTheDocument();
  });

  it('should render edit comment form properly', () => {
    vi.spyOn(
      CommentActionsStateContext,
      'useCommentActionsStateContext'
    ).mockImplementation(() => ({
      ...contextValues,
      showEditCommentForm: true,
    }));
    render(
      <CommentActionsStateProvider>
        <CommentsReplyForms {...mockProps} />
      </CommentActionsStateProvider>
    );
    const commentLabel = screen.getByLabelText('Make a Comment');
    const textArea = screen.getByTestId('textarea');
    const nameLabel = screen.getByLabelText('Name');
    const submitBtn = screen.getByRole('button', { name: /Submit Comment/i });
    const editForm = screen.getByTestId('edit-comment-form');
    const createForm = screen.queryByTestId('create-comment-form');

    expect(commentLabel).toBeInTheDocument();
    expect(textArea).toBeInTheDocument();
    expect(nameLabel).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
    expect(editForm).toBeInTheDocument();
    expect(createForm).not.toBeInTheDocument();
  });

  it('should not render comment actions form if not allowed', () => {
    vi.spyOn(
      CommentActionsStateContext,
      'useCommentActionsStateContext'
    ).mockImplementation(() => ({
      ...contextValues,
    }));
    render(
      <CommentActionsStateProvider>
        <CommentsReplyForms {...mockProps} />
      </CommentActionsStateProvider>
    );
    const commentLabel = screen.queryByLabelText('Make a Comment');
    const textArea = screen.queryByTestId('textarea');
    const nameLabel = screen.queryByLabelText('Name');
    const submitBtn = screen.queryByRole('button', { name: /Submit Comment/i });
    const editForm = screen.queryByTestId('edit-comment-form');
    const createForm = screen.queryByTestId('create-comment-form');

    expect(commentLabel).not.toBeInTheDocument();
    expect(textArea).not.toBeInTheDocument();
    expect(nameLabel).not.toBeInTheDocument();
    expect(submitBtn).not.toBeInTheDocument();
    expect(editForm).not.toBeInTheDocument();
    expect(createForm).not.toBeInTheDocument();
  });
});
