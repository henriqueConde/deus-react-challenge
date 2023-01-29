import React from 'react';
import { DynamicInput } from '@components/DynamicInput';
import { Search } from '@styled-icons/material-outlined';
import * as S from './styles';

type SearchBarProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ value, handleChange }: SearchBarProps) => {
  return (
    <S.Wrapper>
      <DynamicInput
        value={value}
        onChange={handleChange}
        name="search-posts"
        label="Search Posts"
        icon={<Search />}
        labelSize="large"
      />
    </S.Wrapper>
  );
};

export default SearchBar;
