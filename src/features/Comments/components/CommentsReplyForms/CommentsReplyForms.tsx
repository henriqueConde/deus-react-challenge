import { CreateCommentFetch } from '../CreateComment';
import EditCommentFetch from '../EditComment/EditCommentFetch';
import { useCommentContext } from '../../context/CommentContext';

type CommentsReplyFormsProps = {
  id: number;
  parentId: number;
  content: string;
  user: string;
};

const CommentsReplyForms = ({
  id,
  parentId,
  content,
  user,
}: CommentsReplyFormsProps) => {
  const initValues = {
    content,
    name: user,
  };
  const {
    showCommentForm,
    showEditCommentForm,
    setShowCommentForm,
    setShowEditCommentForm,
  } = useCommentContext();
  return (
    <>
      {showCommentForm && (
        <CreateCommentFetch
          data-testid="create-comment-form"
          parentId={id}
          setShowCommentForm={setShowCommentForm}
        />
      )}
      {showEditCommentForm && (
        <EditCommentFetch
          data-testid="edit-comment-form"
          initValues={initValues}
          id={id}
          parentId={parentId}
          setShowEditCommentForm={setShowEditCommentForm}
        />
      )}
    </>
  );
};

export default CommentsReplyForms;
