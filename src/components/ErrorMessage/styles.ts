import styled, { DefaultTheme, css } from 'styled-components';
import { ErrorMessageProps } from './ErrorMessage';

type WrapperProps = Pick<ErrorMessageProps, 'size'>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
};

export const Wrapper = styled.p<WrapperProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.red};
    ${!!size && wrapperModifiers[size](theme)}
  `}
`;
