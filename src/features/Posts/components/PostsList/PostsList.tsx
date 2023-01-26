import { useGetPosts } from '@features/Posts/hooks/useGetPosts';
import { Loading } from '@components/Loading';
import { Post } from '@models/Post';
import { mapToPostPreview } from '@utils/mappers/mapToPostPreview';
import { useGetPostsPage } from '@features/Posts/hooks/useGetPostsPage';
import { PostPreview as PostPreviewModel } from '@models/PostPreview';
import { Button } from '@components/Button';
import { MetaInfo } from '@components/MetaInfo';
import { PostPreview } from '../PostPreview';
import * as S from './styles';
import { sortArrayByDate } from '@utils/sortArrayByDate';
import { flatArrayByDepth } from '@utils/flatArrayByDepth';
import { getPostPreviewArrayFromData } from '@utils/getPostPreviewArrayFromData';
import { InfiniteData } from 'react-query';

export type PostsListProps = {
  isGridView: boolean;
};

const PostsList = ({ isGridView }: PostsListProps) => {
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    isLoading,
    isError,
  } = useGetPostsPage();

  const posts = data && getPostPreviewArrayFromData(data as InfiniteData<any>);
  const displayLoadMoreBtn = hasNextPage && !isFetchingNextPage;

  return (
    <>
      {isError && <div>failed to fetch posts</div>}
      {isLoading && <Loading />}
      <S.Wrapper data-testid="posts-list" isGridView={isGridView}>
        {posts &&
          posts.map((post) => {
            return (
              <PostPreview
                key={post.postId}
                userName={post.userName}
                title={post.title}
                publishDate={post.publishDate}
                description={post.description}
                slug={post.slug}
                postId={post.postId}
              />
            );
          })}
      </S.Wrapper>
      {isFetchingNextPage && <Loading />}
      {displayLoadMoreBtn && (
        <Button size="small" onClick={() => fetchNextPage()}>
          Load More Posts
        </Button>
      )}
      {!hasNextPage && <MetaInfo strong>There are no more posts...</MetaInfo>}
    </>
  );
};

export default PostsList;
