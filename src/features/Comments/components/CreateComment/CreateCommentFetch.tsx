import { useCreateComment } from '@features/Comments/hooks/useCreateComment';
import useGetPostId from '@utils/hooks/useGetPostId';
import { NewCreateCommentOptions } from '@models/NewCreateCommentOptions';
import { CreateCommentData } from '@models/CreateCommentData';
import { SubmitCommentState } from '@models/SubmitCommentState';
import { SubmitCreateComment } from '@models/SubmitCreateComment';
import CreateComment from './CreateComment';

type CreateCommentFetchProps = {
  parentId?: number | null;
  handleHideCommentForm?: () => void;
};

const CreateCommentFetch = ({
  handleHideCommentForm,
  parentId = null,
}: CreateCommentFetchProps) => {
  const { postId } = useGetPostId();
  const { mutate, isLoading, data, isError } = useCreateComment();
  const submitCommentState: SubmitCommentState = {
    isLoading,
    data,
    error: isError ? 'Failed to create comment' : '',
  };
  const handleSubmitData = (commentData: Partial<CreateCommentData>) => {
    const submitComment: NewCreateCommentOptions = {
      parent_id: parentId,
      date: new Date(),
      user: commentData.name as string,
      content: commentData.content as string,
    };

    const newCommentData: SubmitCreateComment = {
      postId: postId as number,
      options: submitComment,
    };

    mutate(newCommentData);
    !!handleHideCommentForm && handleHideCommentForm();
  };

  const initialValues: CreateCommentData = {
    name: '',
    content: '',
  };

  return (
    <CreateComment
      initialValues={initialValues}
      onSubmit={handleSubmitData}
      submitCommentState={submitCommentState}
    />
  );
};

export default CreateCommentFetch;
