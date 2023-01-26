import styled, { DefaultTheme, css } from 'styled-components';
import { MetaInfoProps } from './MetaInfo';

type WrapperProps = Pick<MetaInfoProps, 'strong'>;

const wrapperModifiers = {
  strong: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, strong }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
    ${strong && wrapperModifiers.strong(theme)};
  `};
`;
