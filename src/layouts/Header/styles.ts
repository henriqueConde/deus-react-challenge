import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LangWrapper = styled.div`
  width: 100px;
`;

export const Home = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
  `}
`;
