import { CommentsList } from '@features/Comments/components/CommentsList';
import { CreateCommentFetch } from '@features/Comments/components/CreateComment';
import { useGetComments } from '@features/Comments/hooks/useGetComments';
import Post from '@features/Posts/components/Post/Post';
import { CommentAPI, CommentData } from '@models/Comment';
import useGetPostId from '@utils/hooks/useGetPostId';
import { mapToComments } from '@utils/mappers/mapToComments';
import { Navigate } from 'react-router-dom';
import useValidateUrlPath from '@utils/hooks/useValidateUrlPath';
import * as S from './styles';

const SinglePost = () => {
  const { postId } = useGetPostId();
  const { data } = useGetComments(postId as number);
  const comments = data && mapToComments(data as CommentAPI[]);
  const commentsFinal = comments?.filter((com) => com?.parentId === null);

  const { hasValidUrl } = useValidateUrlPath();

  return (
    <S.Wrapper>
      {!hasValidUrl ? (
        <Navigate to="/NotFound" replace />
      ) : (
        <>
          <Post />
          <CreateCommentFetch />
          <CommentsList comments={commentsFinal as CommentData[]} data={data} />
        </>
      )}
    </S.Wrapper>
  );
};

export default SinglePost;
