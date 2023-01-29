import { useEffect } from 'react';
import { Button } from '@components/Button';
import { Delete } from '@styled-icons/material-outlined';
import { useDeleteComment } from '@features/Comments/hooks/useDeleteComment';
import { Loading } from '@components/Loading';
import { Modal } from '@components/Modal';
import useModal from '@components/Modal/hooks/useModal';
import { ErrorMessage } from '@components/ErrorMessage';
import * as S from './styles';

type DeleteCommentProps = {
  commentId: number;
};

const DeleteComment = ({ commentId }: DeleteCommentProps) => {
  const { mutate, isError, isLoading, reset } = useDeleteComment();
  const { handleCloseModal, modal, handleOpenModal } = useModal();
  const handleSubmit = () => {
    mutate({ commentId });
    handleCloseModal();
  };

  useEffect(() => {
    if (isError) {
      setTimeout(() => {
        reset();
      }, 3000);
    }
  }, [isError, reset]);

  return (
    <>
      <S.DeleteWrapper>
        {!isLoading ? (
          <Button
            size="small"
            icon={<Delete />}
            onClick={handleOpenModal}
            danger
            disabled={isError}
          >
            Delete
          </Button>
        ) : (
          !isError && <Loading />
        )}
        {isError && (
          <S.Error>
            <ErrorMessage>Comment could not be deleted</ErrorMessage>
          </S.Error>
        )}
      </S.DeleteWrapper>
      <Modal close={handleCloseModal} show={modal} title="Warning">
        <S.ModalContent>
          <p>
            You are about to delete this comment. This action is{' '}
            <strong>NOT</strong> reversible
          </p>
          <p>Do you wish to proceed?</p>
        </S.ModalContent>
        <S.ModalActions>
          <Button isSecondary onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Confirm</Button>
        </S.ModalActions>
      </Modal>
    </>
  );
};

export default DeleteComment;
