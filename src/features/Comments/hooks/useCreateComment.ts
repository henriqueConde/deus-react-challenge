import { useMutation } from '@tanstack/react-query';
import { postComment } from '@api/comments';
import { queryClient } from '@api/query-client';

export const useCreateComment = () => {
  return useMutation(postComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments']);
    },
  });
};
