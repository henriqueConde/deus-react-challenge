import { Search } from '@styled-icons/material-outlined';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

const NoResults = () => {
  const { t } = useTranslation();
  return (
    <S.Wrapper>
      <Search />
      <h3>{t('posts.search.no.results')}</h3>
    </S.Wrapper>
  );
};

export default NoResults;
