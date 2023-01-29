import React from 'react';
import { DynamicInput } from '@components/DynamicInput';
import { Search } from '@styled-icons/material-outlined';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

const TRANSLATIONS = {
  LABEL: 'posts.search.bar.label',
};

type PostsSearchBarProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PostsSearchBar = ({ value, handleChange }: PostsSearchBarProps) => {
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

export default PostsSearchBar;
