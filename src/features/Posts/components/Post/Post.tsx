import { useGetPost } from '@features/Posts/hooks/useGetPost';
import useGetPostId from '@utils/hooks/useGetPostId';
import { Loading } from '@components/Loading';
import { SanitizeHtml } from '@components/SanitizeHtml';
import * as S from './styles';

const Post = () => {
  const { postId } = useGetPostId();
  const { data: post, isLoading } = useGetPost(postId as number);
  return (
    <S.Wrapper data-testid="comment-wrapper">
      {isLoading && <Loading />}
      {!!post && (
        <>
          <h2>{post.title}</h2>
          <SanitizeHtml content={post.content} />
        </>
      )}
    </S.Wrapper>
  );
};

export default Post;
