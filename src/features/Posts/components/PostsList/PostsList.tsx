import { Loading } from '@components/Loading';
import { MetaInfo } from '@components/MetaInfo';
import { ErrorMessage } from '@components/ErrorMessage';
import { useTranslation } from 'react-i18next';
import { PostsSearchBar } from '@layouts/PostsSearchBar';
import useLayoutView from '@pages/Home/hooks/useLayoutView';
import { PostsView } from '@components/PostsView';
import { NoResults } from '@components/NoResults';
import { PostPreview } from '../PostPreview';
import usePostsList from '../../hooks/usePostsList';
import * as S from './styles';

const TRANSLATIONS = {
  FAILED_TO_FETCH: 'posts.failed.fetch',
  LOAD_MORE: 'posts.load.more',
  NO_MORE: 'posts.no.more.posts',
};

const PostsList = () => {
  const { t } = useTranslation();

  const {
    value,
    handleChange,
    searchActive,
    loadingSearchResults,
    postsToDisplay,
    loading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    displayLoadMoreBtn,
    noResults,
  } = usePostsList();

  const { isGridView, handleGridView, handleListView } = useLayoutView();

  return (
    <>
      <S.HeaderWrapper>
        <PostsSearchBar value={value} handleChange={handleChange} />
        <PostsView
          isGridView={isGridView}
          handleGridView={handleGridView}
          handleListView={handleListView}
        />
      </S.HeaderWrapper>
      {isError && (
        <ErrorMessage size="large">
          {t(TRANSLATIONS.FAILED_TO_FETCH)}
        </ErrorMessage>
      )}
      {loading && <Loading />}
      {noResults && !loading && <NoResults />}
      {!loadingSearchResults && (
        <S.Wrapper
          data-testid="posts-list"
          data-cy="posts-list"
          isGridView={isGridView}
        >
          {postsToDisplay &&
            postsToDisplay.map((post) => {
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
      )}
      {isFetchingNextPage && <Loading />}
      {displayLoadMoreBtn && !searchActive && (
        <S.LoadMoreBtn isSecondary onClick={() => fetchNextPage()}>
          {t(TRANSLATIONS.LOAD_MORE)}
        </S.LoadMoreBtn>
      )}
      {!hasNextPage && !searchActive && (
        <S.NoMorePosts>
          <MetaInfo size="large" strong>
            {t(TRANSLATIONS.NO_MORE)}
          </MetaInfo>
        </S.NoMorePosts>
      )}
    </>
  );
};

export default PostsList;
