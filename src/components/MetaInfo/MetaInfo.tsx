import React from 'react';
import * as S from './styles';

export type MetaInfoProps = {
  children: React.ReactNode;
  strong?: boolean;
  size?: 'small' | 'large';
};

const MetaInfo = ({
  children,
  strong = false,
  size = 'small',
}: MetaInfoProps) => (
  <S.Wrapper size={size} strong={strong}>
    {children}
  </S.Wrapper>
);

export default MetaInfo;
