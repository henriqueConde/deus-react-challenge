/* eslint-disable react/require-default-props */
import { useEffect, useState } from 'react';
import { OptionsList } from '@models/OptionsList';
import * as S from './styles';

export type DropdownProps = {
  name: string;
  onInputChange: any;
  optionsData: OptionsList[];
  label?: string;
  error?: any;
  isDisabled?: boolean;
  selectValue: string;
  defaultValue?: string;
  testId?: string;
};

const Dropdown = ({
  onInputChange,
  optionsData,
  label,
  error,
  name,
  selectValue,
  defaultValue = '',
  isDisabled = false,
  testId = 'dropdown',
}: DropdownProps) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    !!onInputChange && onInputChange(name, newValue);
  };

  useEffect(() => {
    if (!selectValue) {
      setValue(defaultValue);
    } else {
      setValue(selectValue);
    }
  }, [defaultValue, selectValue]);

  return (
    <>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.DropdownWrapper
        error={error}
        value={value}
        name={name}
        onChange={onChange}
        id={name}
        disabled={isDisabled}
        data-testid={testId}
      >
        {defaultValue && (
          <S.Option value={value} disabled>
            {value}
          </S.Option>
        )}
        {optionsData &&
          optionsData.map(({ value }) => {
            return (
              <S.Option value={value} key={value}>
                {value}
              </S.Option>
            );
          })}
      </S.DropdownWrapper>
      <S.Error>{error || ''}</S.Error>
    </>
  );
};

export default Dropdown;
