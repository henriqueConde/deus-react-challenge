import { Pages } from '@api/posts-types';
import { useGetPostsPage } from '@features/Posts/hooks/useGetPostsPage';
import usePostsSearchBar from '@features/Posts/hooks/usePostsSearchBar';
import { getPostPreviewArrayFromData } from '@utils/getPostPreviewArrayFromData';
import { InfiniteData } from '@tanstack/react-query';

const usePostsList = () => {
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    isInitialLoading,
    isError,
  } = useGetPostsPage();

  const posts =
    data && getPostPreviewArrayFromData(data as unknown as InfiniteData<Pages>);
  const displayLoadMoreBtn = hasNextPage && !isFetchingNextPage;

  const {
    value,
    handleChange,
    searchPosts,
    searchActive,
    loadingSearchResults,
  } = usePostsSearchBar();

  const postsToDisplay = searchPosts || posts;
  const loading = loadingSearchResults || isInitialLoading;

  return {
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
  };
};

export default usePostsList;
