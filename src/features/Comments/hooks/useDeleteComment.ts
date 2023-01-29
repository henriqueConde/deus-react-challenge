import { useMutation } from '@tanstack/react-query';
import { deleteComment } from '@api/comments';
import { queryClient } from '@api/query-client';

export const useDeleteComment = () => {
  return useMutation(deleteComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments']);
    },
  });
};
