import React from 'react';
import { FormWrapper } from '@components/FormWrapper/FormWrapper';
import { TextArea } from '@components/TextArea';
import { DynamicInput } from '@components/DynamicInput';
import { Button } from '@components/Button';
import { useTranslation } from 'react-i18next';

export type CommentFormProps = {
  handleSubmit: (event: React.FormEvent) => void;
  values: any;
  isSubmittingComment: boolean;
  handleInput: (field: string, inputValue: string) => void;
  fieldError: any;
  testId?: string;
};

const CommentForm = ({
  handleSubmit,
  values,
  isSubmittingComment = false,
  handleInput,
  fieldError,
  testId,
}: CommentFormProps) => {
  const { t } = useTranslation();
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit} data-testid={testId} data-cy={testId}>
        <TextArea
          name="content"
          label="post.page.make.comment.label"
          value={values.content}
          onInputChange={(value: string) => handleInput('content', value)}
          error={fieldError?.content}
          testId={`${testId}-textarea`}
        />
        <DynamicInput
          name="name"
          label="commnent.form.name.label"
          type="text"
          value={values.name}
          onInputChange={(value: string) => handleInput('name', value)}
          error={fieldError?.name}
        />
        <Button
          type="submit"
          size="large"
          fullWidth
          disabled={isSubmittingComment}
          data-cy="comment-submit-btn"
        >
          {t('commnent.form.submit.btn')}
        </Button>
      </form>
    </FormWrapper>
  );
};

export default CommentForm;
