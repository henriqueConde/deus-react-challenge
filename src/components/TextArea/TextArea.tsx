import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

export type TextAreaProps = {
  onInputChange?: (value: string) => void;
  value?: string;
  label?: string;
  name: string;
  error?: string;
};

const TextArea = ({
  error = '',
  onInputChange,
  label = '',
  name,
  value = '',
}: TextAreaProps) => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const { t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.currentTarget.value;
    setTextAreaValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  useEffect(() => {
    setTextAreaValue(value);
  }, [textAreaValue, value]);

  return (
    <S.Wrapper>
      {!!label && <S.Label htmlFor={name}>{t(label)}</S.Label>}
      <S.TextAreaWrapper>
        <S.TextArea
          data-testid="textarea"
          name={name}
          id={name}
          rows={4}
          cols={50}
          onChange={handleChange}
          value={textAreaValue}
        />
      </S.TextAreaWrapper>

      <S.Error>{t(error as string) || ''}</S.Error>
    </S.Wrapper>
  );
};

export default TextArea;
