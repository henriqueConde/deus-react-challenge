import { describe, it } from 'vitest';
import { render, screen } from '@utils/customTestSetup';
import CommentsList, { CommentsListProps } from './CommentsList';

const mockProps: CommentsListProps = {
  comments: [
    {
      id: 1,
      postId: 1,
      user: 'Joao',
      date: '2022-02-02',
      content: 'comment content',
      parentId: null,
    },
    {
      id: 3,
      postId: 1,
      user: 'Joao',
      date: '2022-02-02',
      content: 'another comment',
      parentId: null,
    },
  ],
  data: [
    {
      id: 2,
      postId: 1,
      user: 'Mario',
      date: '2022-02-02',
      content: 'comment content 2',
      parent_id: 1,
    },
  ],
};

describe('<CommentsList />', () => {
  it('should render all elements correctly', () => {
    render(<CommentsList {...mockProps} />);
    const comment1 = screen.getByText('comment content');
    const comment2 = screen.getByText('another comment');
    const showRepliesBtn = screen.getByRole('button', {
      name: /Show Replies/i,
    });
    const editBtn = screen.getAllByRole('button', {
      name: /Edit/i,
    });
    const replyBtn = screen.getAllByRole('button', {
      name: /Reply/i,
    });

    expect(comment1).toBeInTheDocument();
    expect(comment2).toBeInTheDocument();
    expect(showRepliesBtn).toBeInTheDocument();
    expect(editBtn).toHaveLength(2);
    expect(replyBtn).toHaveLength(2);
  });

  it('should not render show replies btn if there are no replies', () => {
    const newProps = {
      comments: mockProps.comments,
      data: [
        {
          id: 2,
          postId: 1,
          user: 'Mario',
          date: '2022-02-02',
          content: 'comment content 2',
          parent_id: null,
        },
      ],
    };
    render(<CommentsList {...newProps} />);

    const showRepliesBtn = screen.queryByRole('button', {
      name: /Show Replies/i,
    });

    expect(showRepliesBtn).not.toBeInTheDocument();
  });
});
