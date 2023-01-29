import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  margin: 30px 0px;
`;

export const AppWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: flex-start;
  min-height: 100vh;
  margin: auto 0;

  ${({ theme }) => css`
    width: ${theme.grid.container};
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.medium};
    border-radius: ${theme.border.radius};
    padding: 50px 88px;
    border-radius: 1rem;
    -webkit-box-shadow: ${theme.boxShadow.default};
    -moz-box-shadow: ${theme.boxShadow.default};
    box-shadow: ${theme.boxShadow.default};
    ${media.lessThan('medium')`
    padding: 50px 25px;
  `}
  `}

  footer {
    align-self: flex-end;
  }
`;

export const ContentWrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    gap: ${theme.spacings.xlarge};
    border-top-right-radius: 0;
    ${media.lessThan('medium')`
    display: flex;
    flex-direction: column;
    justify-items: center;
  `}
  `}
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 0;
  left: 0;
`;
