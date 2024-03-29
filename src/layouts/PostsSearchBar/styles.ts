import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 48%;
    margin-top: ${theme.spacings.small};
    ${media.lessThan('medium')`
        width: 100%;
    `}

    input {
      padding: ${theme.spacings.xsmall};
    }
  `}
`;
