import styled, { css, DefaultTheme } from 'styled-components';

import { DynamicInputProps } from './DynamicInput';

type WrapperProps = Pick<DynamicInputProps, 'error'>;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    display: inline-block;
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`;

export const Input = styled.input`
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

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
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
