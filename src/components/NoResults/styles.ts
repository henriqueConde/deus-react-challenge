import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 40vh;
    color: ${theme.colors.gray};

    svg {
      width: 50px;
      color: ${theme.colors.gray};
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`;
