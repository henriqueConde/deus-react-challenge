import styled, { css, DefaultTheme } from 'styled-components';

import { DynamicInputProps } from './DynamicInput';

type WrapperProps = Pick<DynamicInputProps, 'error'>;
type LabelProps = Pick<DynamicInputProps, 'labelSize'>;

export const InputWrapper = styled.div`
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
  `}
`;

const labelModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
};

export const Label = styled.label<LabelProps>`
  ${({ theme, labelSize }) => css`
    display: inline-block;
    color: ${theme.colors.black};
    cursor: pointer;
    ${labelSize && labelModifiers[labelSize](theme)}
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
