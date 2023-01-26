/* eslint-disable react/no-danger */
import { CommentAPI } from '@models/Comment';
import { MetaInfo } from '@components/MetaInfo';
import formatDate from '@utils/formatDate';
import { useReplies } from '@features/Comments/hooks/useReplies';
import { CommentsList } from '../CommentsList';
import CommentActions from '../CommentActions/CommentActions';
import { useCommentContext } from '../../context/CommentContext';
import CommentsReplyForms from '../CommentsReplyForms/CommentsReplyForms';
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
  const { replies, hasReplies } = useReplies(data, id);
  const { result: commentDate } = formatDate(date, 'DD/MM/YYYY');

  const { showReplies } = useCommentContext();

  return (
    <S.Wrapper>
      <S.CommentHeader>
        <MetaInfo>
          {user} - {commentDate}
        </MetaInfo>
      </S.CommentHeader>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <CommentActions hasReplies={hasReplies} />
      <CommentsReplyForms
        content={content}
        user={user}
        id={id}
        parentId={parentId}
      />
      {showReplies && hasReplies && (
        <CommentsList comments={replies} data={data} />
      )}
    </S.Wrapper>
  );
};

export default Comment;
