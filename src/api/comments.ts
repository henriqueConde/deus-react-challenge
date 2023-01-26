import { CommentAPI } from '@models/Comment';
import { axios } from './axios';
import { EditCommentParams, PostCommentParams } from './comments-types';

export const getComments = async (postId: number) => {
  const { data } = await axios.get<CommentAPI[]>(`/posts/${postId}/comments`);
  return data;
};

export const postComment = ({ postId, options }: PostCommentParams) => {
  return axios.post<CommentAPI>(`/posts/${postId}/comments`, options);
};

export const editComment = ({ commentId, options }: EditCommentParams) => {
  return axios.put<CommentAPI>(`/comments/${commentId}`, options);
};
