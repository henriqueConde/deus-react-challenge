import { useEffect } from 'react';
import useModal from '@components/Modal/hooks/useModal';
import { useDeleteComment } from './useDeleteComment';

const useHandleDeleteComment = (commentId: number) => {
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

  return {
    handleSubmit,
    modal,
    handleOpenModal,
    isLoading,
    isError,
    handleCloseModal,
  };
};

export default useHandleDeleteComment;
