import { useQuery } from 'react-query';
import { CommentAPI } from '@models/Comment';
import { getComments } from '@api/comments';
import { sortArrayByDate } from '@utils/sortArrayByDate';

export function useGetComments(postId: number) {
  return useQuery<CommentAPI[], Error>(
    ['comments'],
    () => getComments(postId),
    {
      select: (data) => sortArrayByDate(data, 'date'),
    }
  );
}
