import { PostPreview } from '@models/PostPreview';
import { InfiniteData } from 'react-query';
import { Pages } from '@api/posts-types';
import { flatArrayByDepth } from './flatArrayByDepth';

export const getPostPreviewArrayFromData = (data: InfiniteData<Pages>) => {
  return flatArrayByDepth(
    data.pages.map((page) => {
      return page.posts.map((post) => {
        return post;
      });
    }),
    2
  ) as PostPreview[];
};
