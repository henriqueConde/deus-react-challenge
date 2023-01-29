import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { Button } from '@components/Button';

export type WrapperProps = {
  isGridView: boolean;
};

const wrapperModifiers = {
  grid: () => css`
    grid-template-columns: repeat(2, 1fr);
  `,
  list: () => css`
    grid-template-columns: 1fr;
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ isGridView }) => css`
    margin-top: 20px;
    min-height: 80vh;
    display: grid;
    gap: 50px;
    padding: 20px 0px;
    ${media.lessThan('medium')`
  grid-template-columns: 1fr;
`}

    ${isGridView && wrapperModifiers.grid()};
    ${!isGridView && wrapperModifiers.list()}
  `}
`;

export const LoadMoreBtn = styled(Button)`
  ${({ theme }) => css`
    width: 30%;
    margin: 0 auto;
    margin-top: ${theme.spacings.xxlarge};
    ${media.lessThan('medium')`
      width: 100%;
    `}
  `}
`;

export const NoMorePosts = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-top: ${theme.spacings.xxlarge};
  `}
`;

export const HeaderWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    button {
      padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    }
  `}
`;
