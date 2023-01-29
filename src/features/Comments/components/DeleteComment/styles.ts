import styled, { css } from 'styled-components';

export const DeleteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
`;

export const Error = styled.div`
  position: absolute;
  width: 200px;
  margin-top: 40px;
  right: -10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const ModalActions = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.small};
    justify-content: center;
    margin-top: ${theme.spacings.large};
  `}
`;
