import { useQuery } from '@tanstack/react-query';
import { Post } from '@models/Post';
import { getPost } from '@api/posts';

export function useGetPost(postId: number) {
  return useQuery<Post, Error>({
    queryKey: ['post'],
    queryFn: () => getPost(postId),
  });
}
