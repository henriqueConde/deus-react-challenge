import styled, { css } from 'styled-components';
import * as DynamicInput from '../DynamicInput/styles';
import * as ButtonStyles from '../Button/styles';

export const FormWrapper = styled.div`
  min-height: 40vh;
  flex-grow: 1;
  ${({ theme }) => css`
    ${DynamicInput.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }
    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`;
