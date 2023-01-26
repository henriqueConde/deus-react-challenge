export type NewEditCommentOptions = {
  postId: number;
  parent_id: number | null;
  user: string;
  date: Date;
  content: string;
};
