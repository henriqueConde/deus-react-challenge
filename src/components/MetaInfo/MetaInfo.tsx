import React from 'react';
import * as S from './styles';

export type MetaInfoProps = {
  children: React.ReactNode;
  strong?: boolean;
};

const MetaInfo = ({ children, strong = false }: MetaInfoProps) => (
  <S.Wrapper strong={strong}>{children}</S.Wrapper>
);

export default MetaInfo;
