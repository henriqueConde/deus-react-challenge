import useGetPostId from '@utils/hooks/useGetPostId';
import { useEditComment } from '@features/Comments/hooks/useEditComment';
import { SubmitCommentState } from '@models/SubmitCommentState';
import { CreateCommentData } from '@models/CreateCommentData';
import { SubmitEditComment } from '@models/SubmitEditComment';
import EditComment from './EditComment';

type EditCommentFetchProps = {
  id: number;
  parentId?: number | null;
  initValues: CreateCommentData;
  handleHideEditCommentForm: () => void;
};

const EditCommentFetch = ({
  id,
  parentId = null,
  initValues,
  handleHideEditCommentForm,
}: EditCommentFetchProps) => {
  const { postId } = useGetPostId();
  const { mutate, isLoading, data, isError } = useEditComment();
  const submitCommentState: SubmitCommentState = {
    isLoading,
    data,
    error: isError ? 'Failed to edit comment' : '',
  };
  const handleSubmitData = (commentData: CreateCommentData) => {
    const submitComment: SubmitEditComment = {
      commentId: id as number,
      options: {
        postId: postId as number,
        parent_id: parentId,
        date: new Date(),
        user: commentData.name as string,
        content: commentData.content as string,
      },
    };

    mutate(submitComment);
    handleHideEditCommentForm();
  };

  return (
    <EditComment
      initialValues={initValues}
      onSubmit={handleSubmitData}
      submitCommentState={submitCommentState}
    />
  );
};

export default EditCommentFetch;
