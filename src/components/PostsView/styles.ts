import { Button } from '@components/Button';
import styled from 'styled-components';
import media from 'styled-media-query';
import { GridView } from '@styled-icons/material-outlined';

export const Wrapper = styled.div`
  cursor: pointer;
  ${media.lessThan('medium')`
    display: none;
`}
`;

export const IconButton = styled(Button)`
  padding: 6px 24px;
  svg {
    width: 20px;
    margin-right: 10px;
  }
`;

export const GridIcon = styled(GridView)`
  width: 16px;
  height: 14px;
  margin-bottom: 2px;
`;
