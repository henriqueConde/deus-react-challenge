import { NewCreateCommentOptions } from './NewCreateCommentOptions';
import { NewEditCommentOptions } from './NewEditCommentOptions';

export type NewCommentData = {
  postId: number;
  options: NewCreateCommentOptions | NewEditCommentOptions;
};
