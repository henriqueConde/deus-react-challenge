import { Button } from '@components/Button';
import styled, { css } from 'styled-components';

export const CommentActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px 10px;
`;

export const ShowRepliesBtn = styled(Button)`
  padding: 0px 30px;
  align-self: flex-end;
`;

export const WriteCommentWrapper = styled.div`
  justify-content: flex-end;
  flex-grow: 1;
  display: flex;
  gap: 10px;

  button {
    padding: 0px 30px;
    align-self: flex-end;
  }

  button:first-child {
    ${({ theme }) => css`
      background-color: transparent;
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};
      &:hover {
        background-color: transparent;
      }
    `}
  }
`;
