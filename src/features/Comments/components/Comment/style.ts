import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 30px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    -webkit-box-shadow: ${theme.boxShadow.default};
    -moz-box-shadow: ${theme.boxShadow.default};
    box-shadow: ${theme.boxShadow.default};
  `};
`;

export const CommentData = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
  `};
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
