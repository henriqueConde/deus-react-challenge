import useGetPostId from '@utils/hooks/useGetPostId';
import { mapToComments } from '@utils/mappers/mapToComments';
import { CommentAPI } from '@models/Comment';
import { useGetComments } from './useGetComments';

const useCommentsList = () => {
  const { postId } = useGetPostId();
  const { data } = useGetComments(postId as number);
  const theComments = data && mapToComments(data as CommentAPI[]);
  const commentsFinal = theComments?.filter((com) => com?.parentId === null);

  return { comments: commentsFinal, data };
};

export default useCommentsList;
