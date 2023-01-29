import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorMessage } from '@components/ErrorMessage';
import * as S from './styles';

export type TextAreaProps = {
  onInputChange?: (value: string) => void;
  value?: string;
  label?: string;
  name: string;
  error?: string;
  testId?: string;
};

const TextArea = ({
  error = '',
  onInputChange,
  label = '',
  name,
  value = '',
  testId = ''
}: TextAreaProps) => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.currentTarget.value;
    setTextAreaValue(newValue);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !!onInputChange && onInputChange(newValue);
  };

  useEffect(() => {
    setTextAreaValue(value);
  }, [textAreaValue, value]);

  return (
    <S.Wrapper error={error}>
      {!!label && <S.Label htmlFor={name}>{t(label)}</S.Label>}
      <S.TextAreaWrapper>
        <S.TextArea
          data-testid="textarea"
          data-cy={testId}
          name={name}
          id={name}
          rows={4}
          cols={50}
          onChange={handleChange}
          value={textAreaValue}
        />
      </S.TextAreaWrapper>
      <ErrorMessage>{t(error as string) || ''}</ErrorMessage>
    </S.Wrapper>
  );
};

export default TextArea;
