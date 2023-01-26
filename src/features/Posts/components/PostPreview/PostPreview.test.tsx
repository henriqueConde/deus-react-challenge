import { describe, it, vi } from 'vitest';
import { render, screen } from '@utils/customTestSetup';
import PostPreview, { PostPreviewProps } from './PostPreview';

const mockProps: PostPreviewProps = {
  userName: 'Joao',
  publishDate: '2022-02-02',
  title: 'Post Title',
  description: 'Desc',
  slug: 'the Slug',
  postId: 1,
};

describe('<PostPreview />', () => {
  it('should render all elements', () => {
    render(<PostPreview {...mockProps} />);

    const metaInfo = screen.getByText(`Joao - 02/02/2022`);
    const title = screen.getByText('Post Title');
    const description = screen.getByText('Desc');
    const readBtn = screen.getByRole('button', { name: /Read Article/i });

    expect(metaInfo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(readBtn).toBeInTheDocument();
  });
});
