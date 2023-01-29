import { QueryObserverResult } from '@tanstack/react-query';
import { describe, it, vi } from 'vitest';
import { render, screen, waitFor } from '@utils/customTestSetup';
import { Post } from '@models/Post';
import * as customHook from '@features/Posts/hooks/useGetPosts';
import PostsList from './PostsList';

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

describe('<PostsList  />', () => {
  it('should render loading spinner', () => {
    vi.spyOn(customHook, 'useGetPosts');
    render(<PostsList isGridView={false} />);

    const loadingSpinner = screen.getByTestId('spinner');

    expect(loadingSpinner).toBeInTheDocument();
  });

  it('should render post list on success', async () => {
    vi.spyOn(customHook, 'useGetPosts').mockImplementation(
      () => [mockPost] as unknown as QueryObserverResult<Post[], Error>
    );
    render(<PostsList isGridView={false} />);

    const postsList = screen.getByTestId('posts-list');
    const loadingSpinner = screen.queryByTestId('spinner');

    await waitFor(() => {
      expect(postsList).toBeInTheDocument();
      expect(loadingSpinner).not.toBeInTheDocument();
    });
  });
});
