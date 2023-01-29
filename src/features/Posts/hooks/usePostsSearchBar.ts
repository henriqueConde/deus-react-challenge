import { useGetPosts } from '@features/Posts/hooks/useGetPosts';
import { Post } from '@models/Post';
import { PostPreview } from '@models/PostPreview';
import useDebounce from '@utils/hooks/useDebounce';
import { mapToPostPreview } from '@utils/mappers/mapToPostPreview';
import { useEffect, useState } from 'react';

const usePostsSearchBar = () => {
  const [value, setValue] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const [searchPosts, setSearchPosts] = useState<PostPreview[] | undefined>();
  const [loadingSearchResults, setLoadingSearchResults] = useState(false);
  const { data: posts } = useGetPosts();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoadingSearchResults(true);
    setValue(event.target.value);
  };

  const handleSetSearchResults = () => {
    if (value) {
      const lowerValue = value.toLowerCase();
      const searchResults =
        posts &&
        posts.filter(
          (post) =>
            post.title.toLowerCase().includes(lowerValue) ||
            post.description.toLowerCase().includes(lowerValue)
        );

      searchResults &&
        setSearchPosts(mapToPostPreview(searchResults as Post[]));

      setLoadingSearchResults(false);
    }
  };

  const debouncedFn = useDebounce(handleSetSearchResults, 1000);

  useEffect(() => {
    if (value !== '') {
      setSearchActive(true);
      debouncedFn();
    } else {
      setSearchActive(false);
    }
  }, [debouncedFn, value]);

  useEffect(() => {
    if (!searchActive) {
      setSearchPosts(undefined);
      setLoadingSearchResults(false);
    }
  }, [searchActive]);

  return {
    value,
    handleChange,
    searchPosts,
    searchActive,
    loadingSearchResults,
  };
};

export default usePostsSearchBar;
