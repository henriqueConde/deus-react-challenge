import styled, { css, DefaultTheme } from 'styled-components';
import { darken } from 'polished';
import { ButtonProps } from './Button';

export type WrapperProps = Pick<
  ButtonProps,
  'size' | 'fullWidth' | 'disabled' | 'isSecondary' | 'danger'
>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: transparent;
    color: ${theme.colors.darkGray};
    border: 1px solid ${theme.colors.darkGray};
    &:hover {
      background-color: transparent;
    }
  `,
  danger: (theme: DefaultTheme) => css`
    background-color: transparent;
    color: ${theme.colors.red};
    border: 1px solid ${theme.colors.red};
    &:hover {
      background-color: transparent;
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, disabled, isSecondary, danger }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    &:hover {
      background: ${darken(0.1, theme.colors.primary)};
    }
    svg {
      width: 20px;
      margin-right: 10px;
    }
    ${!!size && wrapperModifiers[size](theme)};
    ${fullWidth && wrapperModifiers.fullWidth()};
    ${disabled && wrapperModifiers.disabled()};
    ${isSecondary && wrapperModifiers.secondary(theme)};
    ${danger && wrapperModifiers.danger(theme)}
  `}
`;
