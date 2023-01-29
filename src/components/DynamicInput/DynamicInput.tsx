import { useState, InputHTMLAttributes, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ErrorMessage } from '@components/ErrorMessage';
import * as S from './styles';

export type DynamicInputProps = {
  onInputChange?: (value: string) => void;
  icon?: React.ReactNode;
  error?: string;
  label?: string;
  labelSize?: 'small' | 'large';
  disabled?: boolean;
  type?: string;
  value?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const DynamicInput = ({
  icon,
  error,
  name,
  label,
  type = 'text',
  labelSize = 'small',
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

    !!onInputChange && onInputChange(newValue);
  };

  useEffect(() => {
    setInputValue(value);
  }, [inputValue, value]);

  return (
    <S.Wrapper error={error}>
      {!!label && (
        <S.Label labelSize={labelSize} htmlFor={name}>
          {t(label)}
        </S.Label>
      )}
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
      <ErrorMessage>{t(error as string) || ''}</ErrorMessage>
    </S.Wrapper>
  );
};

export default DynamicInput;
