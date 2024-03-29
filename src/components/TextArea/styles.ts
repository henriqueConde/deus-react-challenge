import styled, { css, DefaultTheme } from 'styled-components';
import { TextAreaProps } from './TextArea';

type WrapperProps = Pick<TextAreaProps, 'error'>;

export const TextAreaWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    &:focus-within {
      box-shadow: ${theme.boxShadow.withPrimary};
    }
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    display: inline-block;
    color: ${theme.colors.black};
    cursor: pointer;
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-left: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};
    order: 0;
    & > svg {
      width: 100%;
    }
  `}
`;

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${TextAreaWrapper} {
      border-color: ${theme.colors.red};
    }
    ${Icon} {
      color: ${theme.colors.red};
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error }) => css`
    ${error && wrapperModifiers.error(theme)}
  `}
`;
