import { useMutation } from '@tanstack/react-query';
import { editComment } from '@api/comments';
import { queryClient } from '@api/query-client';

export const useEditComment = () => {
  return useMutation(editComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments']);
    },
  });
};
