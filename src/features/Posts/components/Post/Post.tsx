import { useGetPost } from '@features/Posts/hooks/useGetPost';
import useGetPostId from '@utils/hooks/useGetPostId';
import { Loading } from '@components/Loading';
import { HtmlWrapper } from '@components/HtmlWrapper';
import * as S from './styles';

const Post = () => {
  const { postId } = useGetPostId();
  const { data: post, isInitialLoading } = useGetPost(postId as number);
  return (
    <S.Wrapper data-testid="post-wrapper" data-cy="post-wrapper">
      {isInitialLoading && <Loading />}
      {!!post && (
        <>
          <h2>{post.title}</h2>
          <div data-cy="post-content">
            <HtmlWrapper content={post.content} />
          </div>
        </>
      )}
    </S.Wrapper>
  );
};

export default Post;
