import { Navigate } from 'react-router-dom';
import { CommentsList } from '@features/Comments/components/CommentsList';
import { CreateCommentFetch } from '@features/Comments/components/CreateComment';
import { Post } from '@features/Posts/components/Post';
import { CommentData } from '@models/Comment';
import useValidateUrlPath from '@utils/hooks/useValidateUrlPath';
import useCommentsList from '@features/Comments/hooks/useCommentsList';
import * as S from './styles';

const SinglePost = () => {
  const { comments, data } = useCommentsList();
  const { hasValidUrl } = useValidateUrlPath();
  return (
    <S.Wrapper>
      {!hasValidUrl ? (
        <Navigate to="/NotFound" replace />
      ) : (
        <>
          <Post />
          <CreateCommentFetch />
          <CommentsList comments={comments as CommentData[]} data={data} />
        </>
      )}
    </S.Wrapper>
  );
};

export default SinglePost;
