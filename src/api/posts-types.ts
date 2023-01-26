import { Post } from '@models/Post';
import { PostPreview } from '@models/PostPreview';

export type Pages = {
  current: number;
  next: number | null;
  posts: Post[] | PostPreview[];
};
