import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.article`
  padding: 20px;
  height: 200px;
  position: relative;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
  `};
  -webkit-box-shadow: 7px 6px 8px -4px rgba(110, 110, 110, 0.22);
  -moz-box-shadow: 7px 6px 8px -4px rgba(110, 110, 110, 0.22);
  box-shadow: 7px 6px 8px -4px rgba(110, 110, 110, 0.22);
  &:hover {
    transform: scale(1.05);
    transition: all 0.3s;
  }
`;

export const AnchorWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const Description = styled.p`
  ${({ theme }) => css`
    ${media.lessThan('small')`
    font-size: ${theme.font.sizes.xsmall};
`}
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    ${media.lessThan('small')`
    font-size: ${theme.font.sizes.medium};
`}
  `}
`;
