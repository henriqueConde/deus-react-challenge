/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { DropdownProps } from './Dropdown';

type WrapperProps = Pick<DropdownProps, 'error'>;

export const DropdownWrapper = styled.select<WrapperProps>`
  ${({ theme, error }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray};
    border-radius: 0.2rem;
    padding: ${theme.spacings.xxsmall} 1rem;
    border: 0.2rem solid;
    border-color: ${error ? 'red' : theme.colors.lightGray};
    width: 100%;
    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
    &:focus-visible {
      outline: none;
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

export const Option = styled.option`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.small} 0;
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
