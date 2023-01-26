import { useMutation } from 'react-query';
import { postComment } from '@api/comments';
import { queryClient } from '@api/query-client';

export const useCreateComment = (): any => {
  return useMutation(postComment, {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
    },
  });
};
