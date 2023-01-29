import { describe, it, vi } from 'vitest';
import { render, screen, waitFor } from '@utils/customTestSetup';
import * as customHook from '@features/Posts/hooks/useGetPosts';
import { QueryObserverResult } from '@tanstack/react-query';
import { Post } from '@models/Post';
import Home from './Home';

const mockPost = {
  id: 10,
  title: 'title',
  author: 'author',
  publish_date: '2022-02-02',
  slug: 'slug',
  description: 'desc',
  content: 'cont',
};

describe('<Home />', () => {
  it('should render main title and loading spinner', () => {
    render(<Home />);
    const mainTitle = screen.getByText('The Most Recent Posts');
    const loadingSpinner = screen.getByTestId('spinner');
    expect(mainTitle).toBeInTheDocument();
    expect(loadingSpinner).toBeInTheDocument();
  });

  it('should render psots lists and main title on success', async () => {
    vi.spyOn(customHook, 'useGetPosts').mockImplementation(
      () => [mockPost] as unknown as QueryObserverResult<Post[], Error>
    );
    render(<Home />);

    const mainTitle = screen.queryByText('The Most Recent Posts');
    const loadingSpinner = screen.queryByTestId('spinner');
    const postsList = screen.getByTestId('posts-list');

    await waitFor(() => {
      expect(mainTitle).toBeInTheDocument();
      expect(loadingSpinner).not.toBeInTheDocument();
      expect(postsList).toBeInTheDocument();
    });
  });
});
