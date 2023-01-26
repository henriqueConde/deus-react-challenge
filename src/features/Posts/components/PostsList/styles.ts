import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import { PostsListProps } from './PostsList';

export type WrapperProps = Pick<PostsListProps, 'isGridView'>;

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
