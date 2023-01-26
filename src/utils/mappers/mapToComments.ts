import { CommentData, CommentAPI } from '@models/Comment';

export const mapToComments = (data: CommentAPI[]): CommentData[] => {
  return data?.map((comment) => {
    return {
      id: comment.id,
      postId: comment.postId,
      user: comment.user,
      date: comment.date,
      content: comment.content,
      parentId: comment.parent_id,
    };
  });
};
