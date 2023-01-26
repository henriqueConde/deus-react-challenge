import { PropsWithChildren } from 'react';
import { Header } from '@layouts/Header';
import * as S from './styles';

const Container = ({ children }: PropsWithChildren) => {
  return (
    <S.MainContainer>
      <S.AppWrapper>
        <Header />
        <S.ContentWrapper>{children}</S.ContentWrapper>
      </S.AppWrapper>
    </S.MainContainer>
  );
};

export default Container;
