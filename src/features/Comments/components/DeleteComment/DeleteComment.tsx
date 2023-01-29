/* eslint-disable react/jsx-key */
import { Button } from '@components/Button';
import { Delete } from '@styled-icons/material-outlined';
import { Loading } from '@components/Loading';
import { Modal } from '@components/Modal';
import { ErrorMessage } from '@components/ErrorMessage';
import { Trans, useTranslation } from 'react-i18next';
import useHandleDeleteComment from '@features/Comments/hooks/useHandleDeleteComment';
import * as S from './styles';

const TRANSLATIONS = {
  DELETE_BTN: 'comment.delete.btn',
  DELETE_ERROR_MESSAGE: 'comment.delete.error.message',
  NOT_REVERSIBLE: 'comment.delete.modal.not.reversible',
  PROCEED: 'comment.delete.modal.whish.proceed',
  CANCEL: 'comment.delete.modal.cancel.btn',
  CONFIRM: 'comment.delete.modal.confirm.btn',
  WARN_TITLE: 'comment.delete.modal.title',
};

type DeleteCommentProps = {
  commentId: number;
};

const DeleteComment = ({ commentId }: DeleteCommentProps) => {
  const {
    handleSubmit,
    modal,
    handleOpenModal,
    isLoading,
    isError,
    handleCloseModal,
  } = useHandleDeleteComment(commentId);

  const { t } = useTranslation();

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
            {t(TRANSLATIONS.DELETE_BTN)}
          </Button>
        ) : (
          !isError && <Loading />
        )}
        {isError && (
          <S.Error>
            <ErrorMessage>{t(TRANSLATIONS.DELETE_ERROR_MESSAGE)}</ErrorMessage>
          </S.Error>
        )}
      </S.DeleteWrapper>
      <Modal
        close={handleCloseModal}
        show={modal}
        title={t(TRANSLATIONS.WARN_TITLE)}
      >
        <S.ModalContent>
          <p>
            <Trans
              i18nKey={TRANSLATIONS.NOT_REVERSIBLE}
              components={[<strong />]}
            />
          </p>
          <p>{t(TRANSLATIONS.PROCEED)}</p>
        </S.ModalContent>
        <S.ModalActions>
          <Button isSecondary onClick={handleCloseModal}>
            {t(TRANSLATIONS.CANCEL)}
          </Button>
          <Button onClick={handleSubmit}>{t(TRANSLATIONS.CONFIRM)}</Button>
        </S.ModalActions>
      </Modal>
    </>
  );
};

export default DeleteComment;
