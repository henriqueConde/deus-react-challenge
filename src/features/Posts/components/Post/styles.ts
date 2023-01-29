import styled, { css } from 'styled-components';

export const Wrapper = styled.article`
  cursor: pointer;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
  `}
`;
