import { useQuery } from 'react-query';
import { Post } from '@models/Post';
import { getPosts } from '@api/posts';
import { sortArrayByDate } from '@utils/sortArrayByDate';

export function useGetPosts() {
  return useQuery<Post[], Error>(['posts'], getPosts, {
    select: (data) => sortArrayByDate(data, 'publishDate'),
  });
}
