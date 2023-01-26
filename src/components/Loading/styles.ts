/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css } from 'styled-components';
import { LoadingProps } from './Loading';

export const Wrapper = styled.main`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.div<LoadingProps>`
${({ theme, color, position }) => css`
  position: relative;
  width: 100%;
  height: 0px;
  margin: 0 auto;
  display: flex;
  justify-content: ${position};
  top: ${position === 'right' ? '-50px' : 0};
  &::after {
      border: 32px solid ${theme.colors[color!]};
      border-color: ${theme.colors[color!]} transparent ${theme.colors[color!]}
        transparent;
        content: ' ';
        display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    
    animation: loadingAnimation 1.2s infinite;
  }
  
  @keyframes loadingAnimation {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
    `}
  }
`;
