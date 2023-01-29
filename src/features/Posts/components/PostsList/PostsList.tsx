import { Loading } from '@components/Loading';
import { MetaInfo } from '@components/MetaInfo';
import { ErrorMessage } from '@components/ErrorMessage';
import { useTranslation } from 'react-i18next';
import { SearchBar } from '@layouts/SearchBar';
import { PostPreview } from '../PostPreview';
import * as S from './styles';
import usePostsList from '../../hooks/usePostsList';

const TRANSLATIONS = {
  FAILED_TO_FETCH: 'posts.failed.fetch',
  LOAD_MORE: 'posts.load.more',
  NO_MORE: 'posts.no.more.posts',
};

export type PostsListProps = {
  isGridView: boolean;
};

const PostsList = ({ isGridView }: PostsListProps) => {
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
  } = usePostsList();

  return (
    <>
      <SearchBar value={value} handleChange={handleChange} />
      {isError && (
        <ErrorMessage size="large">
          {t(TRANSLATIONS.FAILED_TO_FETCH)}
        </ErrorMessage>
      )}
      {loading && <Loading />}
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
