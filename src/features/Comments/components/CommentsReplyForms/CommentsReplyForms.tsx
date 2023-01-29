import { CreateCommentFetch } from '../CreateComment';
import EditCommentFetch from '../EditComment/EditCommentFetch';
import { useCommentActionsStateContext } from '../../context/CommentActionsStateContext';

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
    handleHideCommentForm,
    handleHideEditCommentForm,
  } = useCommentActionsStateContext();
  return (
    <>
      {showCommentForm && (
        <CreateCommentFetch
          data-testid="create-comment-form"
          data-cy="create-comment-form"
          parentId={id}
          handleHideCommentForm={handleHideCommentForm}
        />
      )}
      {showEditCommentForm && (
        <EditCommentFetch
          data-testid="edit-comment-form"
          data-cy="edit-comment-form"
          initValues={initValues}
          id={id}
          parentId={parentId}
          handleHideEditCommentForm={handleHideEditCommentForm}
        />
      )}
    </>
  );
};

export default CommentsReplyForms;
