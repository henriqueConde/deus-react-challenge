import styled, { DefaultTheme, css } from 'styled-components';
import { MetaInfoProps } from './MetaInfo';

type WrapperProps = Pick<MetaInfoProps, 'strong' | 'size'>;

const wrapperModifiers = {
  strong: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
  `,
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, strong, size }) => css`
    color: ${theme.colors.gray};
    ${strong && wrapperModifiers.strong(theme)};
    ${!!size && wrapperModifiers[size](theme)}
  `};
`;
