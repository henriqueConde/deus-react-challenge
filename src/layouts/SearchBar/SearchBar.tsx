import React from 'react';
import { DynamicInput } from '@components/DynamicInput';
import { Search } from '@styled-icons/material-outlined';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

const TRANSLATIONS = {
  LABEL: 'posts.search.bar.label',
};

type SearchBarProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ value, handleChange }: SearchBarProps) => {
  const { t } = useTranslation();
  return (
    <S.Wrapper>
      <DynamicInput
        value={value}
        onChange={handleChange}
        name="search-posts"
        label={t(TRANSLATIONS.LABEL) as string}
        icon={<Search />}
        labelSize="large"
      />
    </S.Wrapper>
  );
};

export default SearchBar;
