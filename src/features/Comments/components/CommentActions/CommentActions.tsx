import { Button } from '@components/Button';
import { useTranslation } from 'react-i18next';
import { useCommentContext } from '../../context/CommentContext';
import * as S from './styles';

type CommentActionsProps = {
  hasReplies: boolean;
};

const CommentActions = ({ hasReplies }: CommentActionsProps) => {
  const {
    handleReplyClick,
    handleMakeCommentClick,
    handleEditCommentClick,
    editBtnText,
    replyBtnText,
    displayRepliesBtnText,
  } = useCommentContext();

  const { t } = useTranslation();

  return (
    <S.CommentActions>
      {hasReplies && (
        <S.ShowRepliesBtn
          isSecondary
          type="button"
          onClick={handleReplyClick}
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
