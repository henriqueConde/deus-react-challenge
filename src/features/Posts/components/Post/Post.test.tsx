import { describe, it, vi } from 'vitest';
import { render, waitFor, screen } from '@utils/customTestSetup';
import * as customHook from '@features/Posts/hooks/useGetPost';
import { Post as PostAPI } from '@models/Post';
import { QueryObserverIdleResult } from '@tanstack/react-query';
import Post from './Post';

vi.mock('useGetPostId', () => ({
  postId: 1,
}));

const mockPost = {
  id: 10,
  title: 'title',
  author: 'author',
  publish_date: '2022-02-02',
  slug: 'slug',
  description: 'desc',
  content: 'cont',
};

describe('<Post />', () => {
  it('should render spinner', async () => {
    vi.spyOn(customHook, 'useGetPost');
    render(<Post />);
    const loadingSpinner = screen.getByTestId('spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });

  it('should render article on success', async () => {
    vi.spyOn(customHook, 'useGetPost').mockImplementation(
      () => mockPost as unknown as QueryObserverIdleResult<PostAPI, Error>
    );
    render(<Post />);

    const post = screen.getByTestId('post-wrapper');

    await waitFor(() => {
      expect(post).toBeInTheDocument();
    });
  });
});
