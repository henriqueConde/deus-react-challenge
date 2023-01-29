import { CommentAPI } from '@models/Comment';
import { MetaInfo } from '@components/MetaInfo';
import formatDate from '@utils/formatDate';
import { useReplies } from '@features/Comments/hooks/useReplies';
import CommentActionsStateProvider from '@features/Comments/context/CommentActionsStateContext';
import { HtmlWrapper } from '@components/HtmlWrapper';
import { CommentsList } from '../CommentsList';
import CommentActions from '../CommentActions/CommentActions';
import CommentsReplyForms from '../CommentsReplyForms/CommentsReplyForms';
import { DeleteComment } from '../DeleteComment';
import * as S from './style';

export type CommentProps = {
  date: string | Date;
  user: string;
  content: string;
  id: number;
  data: CommentAPI[];
  parentId: number;
};

const Comment = ({ user, content, date, id, data, parentId }: CommentProps) => {
  const { replies, hasReplies, showReplies, handleSowReplies } = useReplies({
    commentArr: data,
    id,
  });
  const { result: commentDate } = formatDate(date, 'DD/MM/YYYY');
  return (
    <S.Wrapper data-cy="comment-wrapper">
      <S.CommentHeader>
        <MetaInfo>
          {user} - {commentDate}
        </MetaInfo>
        <DeleteComment commentId={id} />
      </S.CommentHeader>
      <HtmlWrapper content={content} />
      <CommentActionsStateProvider>
        <CommentActions
          hasReplies={hasReplies}
          handleShowReplies={handleSowReplies}
          showReplies={showReplies}
        />
        <CommentsReplyForms
          content={content}
          user={user}
          id={id}
          parentId={parentId}
        />
      </CommentActionsStateProvider>
      {showReplies && hasReplies && (
        <CommentsList comments={replies} data={data} />
      )}
    </S.Wrapper>
  );
};

export default Comment;
