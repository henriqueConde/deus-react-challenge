import { useQuery } from '@tanstack/react-query';
import { Post } from '@models/Post';
import { getPosts } from '@api/posts';
import { sortArrayByDate } from '@utils/sortArrayByDate';

export function useGetPosts() {
  return useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: getPosts,
    staleTime: 1000 * 60,
    select: (data) => sortArrayByDate(data, 'publishDate'),
  });
}
