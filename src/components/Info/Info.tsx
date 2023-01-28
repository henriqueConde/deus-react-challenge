import { ReactNode } from 'react';
import * as S from './styles';

type InfoProps = {
  children: ReactNode;
  icon: JSX.Element;
};

const Info = ({ children, icon }: InfoProps) => (
  <S.Wrapper>
    {icon}
    <div>{children}</div>
  </S.Wrapper>
);

export default Info;
