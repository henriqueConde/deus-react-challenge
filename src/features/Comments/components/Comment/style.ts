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
  `};
  -webkit-box-shadow: 7px 6px 8px -4px rgba(110, 110, 110, 0.22);
  -moz-box-shadow: 7px 6px 8px -4px rgba(110, 110, 110, 0.22);
  box-shadow: 7px 6px 8px -4px rgba(110, 110, 110, 0.22);
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
