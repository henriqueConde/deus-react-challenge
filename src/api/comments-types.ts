import { SubmitCreateComment } from '@models/SubmitCreateComment';
import { SubmitEditComment } from '@models/SubmitEditComment';

export type PostCommentParams = SubmitCreateComment;

export type EditCommentParams = SubmitEditComment;

export type DeleteCommentParams = {
  commentId: number;
};
