import { CommentAPI, CommentData } from '@models/Comment';
import { sortArrayByDate } from '@utils/sortArrayByDate';
import Comment from '../Comment/Comment';
import CommentStateProvider from '../../context/CommentContext';

export type CommentsListProps = {
  comments: CommentData[] | null;
  data: CommentAPI[] | undefined;
};

const CommentsList = ({ comments, data }: CommentsListProps) => {
  const sortedComments =
    comments && sortArrayByDate(comments as CommentData[], 'date');
  return (
    <div>
      {sortedComments &&
        (sortedComments as CommentData[]).map(
          ({ date, user, content, id, parentId }) => {
            return (
              <CommentStateProvider key={id}>
                <Comment
                  id={id}
                  date={date}
                  user={user}
                  content={content}
                  data={data as CommentAPI[]}
                  parentId={parentId as number}
                />
              </CommentStateProvider>
            );
          }
        )}
    </div>
  );
};

export default CommentsList;
