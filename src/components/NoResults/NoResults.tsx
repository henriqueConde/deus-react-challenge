import { Search } from '@styled-icons/material-outlined';
import * as S from './styles';

const NoResults = () => (
  <S.Wrapper>
    <Search />
    <h3>No results...</h3>
  </S.Wrapper>
);

export default NoResults;
