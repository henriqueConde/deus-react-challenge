import { Button } from '@components/Button';
import { Delete } from '@styled-icons/material-outlined';
import { useDeleteComment } from '@features/Comments/hooks/useDeleteComment';
import { Loading } from '@components/Loading';
import * as S from './styles';

type DeleteCommentProps = {
  commentId: number;
};

const DeleteComment = ({ commentId }: DeleteCommentProps) => {
  const { mutate, isError, isLoading } = useDeleteComment();
  return (
    <>
      {!isLoading ? (
        <Button
          size="small"
          icon={<Delete />}
          onClick={() => mutate({ commentId })}
          danger
        >
          Delete
        </Button>
      ) : (
        <Loading />
      )}
      {isError && <p>Could not delete coment...</p>}
    </>
  );
};

export default DeleteComment;
