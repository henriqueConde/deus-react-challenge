/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { AnchorProps } from './Anchor';

export const Anchor = styled(Link)<Pick<AnchorProps, 'color'>>`
  ${({ theme, color }) => css`
    color: ${theme.colors[color!]};
    text-decoration: none;
  `}
`;
