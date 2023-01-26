import { Post } from '@models/Post';

export const getPostIdFromSlug = (posts: Post[], slug: string) => {
  return posts.filter((post) => post.slug === slug)[0].id;
};
