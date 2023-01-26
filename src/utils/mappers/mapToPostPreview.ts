import { Post } from '@models/Post';
import { PostPreview } from '@models/PostPreview';

export const mapToPostPreview = (data: Post[]): PostPreview[] => {
  return data.map((post) => {
    return {
      postId: post.id,
      userName: post.author,
      title: post.title,
      description: post.description,
      publishDate: post.publish_date,
      slug: post.slug,
    };
  });
};
