import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetPosts } from '@features/Posts/hooks/useGetPosts';
import { Post } from '@models/Post';
import { useGetPostId } from './useGetPostId';

const useValidateUrlPath = () => {
  const [hasValidUrl, setHasValidUrl] = useState(true);
  const { postId } = useGetPostId();
  const { slug } = useParams();
  const { data: posts } = useGetPosts();

  useEffect(() => {
    if (!!posts && !!slug && !!postId) {
      const pathIsValid =
        (posts as Post[]).filter(
          (post) => post.slug === slug && post.id === postId
        ).length > 0 || false;
      setHasValidUrl(pathIsValid);
    }
  }, [posts, slug, postId]);

  return { hasValidUrl };
};

export default useValidateUrlPath;
