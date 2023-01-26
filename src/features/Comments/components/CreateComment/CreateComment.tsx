import useCommentForm from '@features/Comments/hooks/useCommentForm';
import { SubmitCommentState } from '@models/SubmitCommentState';
import { CreateCommentData } from '@models/CreateCommentData';
import { CommentForm } from '../CommentForm';

export type CreateCommentProps = {
  initialValues: CreateCommentData;
  onSubmit: (commentData: CreateCommentData) => void;
  submitCommentState: SubmitCommentState;
};

const CreateComment = ({
  initialValues,
  onSubmit,
  submitCommentState,
}: CreateCommentProps) => {
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
      testId="create-comment-form"
    />
  );
};

export default CreateComment;
