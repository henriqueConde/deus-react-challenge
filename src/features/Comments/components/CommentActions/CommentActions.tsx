import { Button } from '@components/Button';
import { useTranslation } from 'react-i18next';
import useCommentsTranslations from '@features/Comments/hooks/useCommentsTranslations';
import { useCommentActionsStateContext } from '../../context/CommentActionsStateContext';
import * as S from './styles';

type CommentActionsProps = {
  hasReplies: boolean;
  handleShowReplies: () => void;
  showReplies: boolean;
};

const CommentActions = ({
  hasReplies,
  handleShowReplies,
  showReplies,
}: CommentActionsProps) => {
  const {
    handleMakeCommentClick,
    handleEditCommentClick,
    showCommentForm,
    showEditCommentForm,
  } = useCommentActionsStateContext();

  const { editBtnText, replyBtnText, displayRepliesBtnText } =
    useCommentsTranslations({
      showCommentForm,
      showEditCommentForm,
      showReplies,
    });

  const { t } = useTranslation();

  return (
    <S.CommentActions>
      {hasReplies && (
        <S.ShowRepliesBtn
          isSecondary
          type="button"
          onClick={handleShowReplies}
          size="small"
        >
          {t(displayRepliesBtnText)}
        </S.ShowRepliesBtn>
      )}
      <S.WriteCommentWrapper>
        <Button size="small" type="button" onClick={handleEditCommentClick}>
          {t(editBtnText)}
        </Button>
        <Button type="button" onClick={handleMakeCommentClick} size="small">
          {t(replyBtnText)}
        </Button>
      </S.WriteCommentWrapper>
    </S.CommentActions>
  );
};

export default CommentActions;
