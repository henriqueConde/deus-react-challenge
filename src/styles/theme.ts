export default {
  grid: {
    container: '144rem',
  },
  border: {
    radius: '0.4rem',
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    normal: 400,
    bold: 600,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
    },
  },
  boxShadow: {
    default: '7px 6px 8px -4px rgba(110, 110, 110, 0.22)',
    withPrimary: `0 0 0.5rem #038FC9`,
  },
  colors: {
    bright: '#FFAFBD',
    primary: '#038FC9',
    white: '#FAFAFA',
    black: '#030517',
    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    red: '#FF6347',
    background: {
      modal: ' rgba(0, 0, 0, 0.5)',
    },
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
} as const;
