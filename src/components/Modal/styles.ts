import { Close } from '@styled-icons/material-outlined';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${theme.colors.background.modal};
    z-index: ${theme.zIndex.layer1};
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};
  `}
`;

export const Modal = styled.div`
  ${({ theme }) => css`
    width: 50vw;
    height: auto;
    padding: 5rem;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    box-shadow: ${theme.boxShadow.default};
    ${media.lessThan('medium')`
    width: 100vw;
`}
  `}
`;

export const CloseIcon = styled(Close)`
  cursor: pointer;
  width: 20px;
`;
