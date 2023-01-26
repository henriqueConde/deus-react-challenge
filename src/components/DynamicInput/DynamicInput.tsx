import { useState, InputHTMLAttributes, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

export type DynamicInputProps = {
  onInputChange?: (value: string) => void;
  icon?: React.ReactNode;
  error?: string;
  label?: string;
  disabled?: boolean;
  type: string;
  value?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const DynamicInput = ({
  icon,
  error,
  name,
  label,
  type = 'text',
  disabled = false,
  onInputChange,
  value = '',
  ...props
}: DynamicInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const { t } = useTranslation();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setInputValue(newValue);

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !!onInputChange && onInputChange(newValue);
  };

  useEffect(() => {
    setInputValue(value);
  }, [inputValue, value]);

  return (
    <S.Wrapper error={error}>
      {!!label && <S.Label htmlFor={name}>{t(label)}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.Input
          id={name}
          type={type}
          onChange={onChange}
          value={value}
          name={name}
          disabled={disabled}
          {...props}
        />
      </S.InputWrapper>
      <S.Error>{t(error as string) || ''}</S.Error>
    </S.Wrapper>
  );
};

export default DynamicInput;
