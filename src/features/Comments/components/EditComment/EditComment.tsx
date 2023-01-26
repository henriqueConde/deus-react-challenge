import useCommentForm from '@features/Comments/hooks/useCommentForm';
import { CreateCommentData } from '@models/CreateCommentData';
import { CommentForm } from '../CommentForm';

type EditCommentType = {
  initialValues: CreateCommentData;
  onSubmit: (commentData: CreateCommentData) => any;
  submitCommentState: any;
};

const EditComment = ({
  initialValues,
  onSubmit,
  submitCommentState,
}: EditCommentType) => {
  const { isLoading: isSubmittingComment } = submitCommentState;
  const { handleSubmit, state, handleInput } = useCommentForm({
    initialValues,
    onSubmit,
  });
  const { fieldError, values } = state;
  return (
    <CommentForm
      fieldError={fieldError}
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      values={values}
      isSubmittingComment={isSubmittingComment}
      testId="edit-comment-form"
    />
  );
};

export default EditComment;
