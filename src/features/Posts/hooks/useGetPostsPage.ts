import { useInfiniteQuery } from 'react-query';
import { getPostsPage } from '@api/posts';
import { sortArrayByDate } from '@utils/sortArrayByDate';
import { mapToPostPreview } from '@utils/mappers/mapToPostPreview';
import { Post } from '@models/Post';

export function useGetPostsPage() {
  return useInfiniteQuery(
    ['postsPage'],
    ({ pageParam = 1 }) => getPostsPage(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.next ? lastPage.next : undefined;
      },
      select: (data) => {
        const nPosts = data.pages.map((page) => {
          return sortArrayByDate(
            mapToPostPreview(page.posts as Post[]),
            'publishDate'
          );
        });
        return {
          ...data,
          pages: [{ ...data.pages, posts: nPosts }],
        };
      },
    }
  );
}
