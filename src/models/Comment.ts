export type CommentAPI = {
  id: number;
  postId: number;
  parent_id: number | null;
  user: string;
  date: string;
  content: string;
};

export type CommentData = {
  id: number;
  postId: number;
  user: string;
  date: string | Date;
  content: string;
  parentId: number | null;
};
