import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from 'styled-components';
import { Theme } from '../../styled-components';

type GlobalStylesProps = {
  theme: Theme;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        &::before,
        &::after {
          box-sizing: inherit;
        }
      }
      ${({ theme }) => css`
        html {
          font-size: 62.5%;
        }
        body {
          font-family: ${theme.font.family};
          font-size: ${theme.font.sizes.medium};
          background-image: linear-gradient(
            to bottom,
            #bac6d8,
            #b1c3de,
            #a8c1e3,
            #9fbee9,
            #94bcee
          );
        }
      `}
    `;
export default GlobalStyles;
