import { ReactNode } from 'react';
import * as S from './styles';

export type ErrorMessageProps = {
  children: ReactNode;
  size?: 'small' | 'large';
};

const ErrorMessage = ({ children, size = 'small' }: ErrorMessageProps) => (
  <S.Wrapper size={size}>{children}</S.Wrapper>
);

export default ErrorMessage;
