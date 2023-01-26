import { describe, it } from 'vitest';
import { render, screen } from '@utils/customTestSetup';
import Comment, { CommentProps } from './Comment';

const mockCommentApi = {
  id: 10,
  postId: 1,
  parent_id: null,
  user: 'Mario',
  date: '2022-02-02',
  content: 'this is another comment',
};

const mockProps: CommentProps = {
  date: new Date('2022-02-02'),
  user: 'Joao',
  content: 'This is a comment',
  id: 10,
  data: [mockCommentApi],
  parentId: 2,
};

describe('<Commment />', () => {
  it('should render label and value', () => {
    render(<Comment {...mockProps} />);

    const comment = screen.getByText(mockProps.content);
    const editBtn = screen.getByRole('button', { name: 'Edit' });
    const replyBtn = screen.getByRole('button', { name: 'Reply' });
    const authorAndDateText = screen.getByText('Joao - 02/02/2022');

    expect(comment).toBeInTheDocument();
    expect(editBtn).toBeInTheDocument();
    expect(replyBtn).toBeInTheDocument();
    expect(authorAndDateText).toBeInTheDocument();
  });
});
