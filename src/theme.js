import { createTheme } from '@mui/material/styles';
import { red, grey, green } from '@mui/material/colors';

const baseTheme = createTheme({

  status: {
    danger: '#ff6600'
  },
  palette: {
    
    primary: {
      main: '#337084',
      light: '#6c8b93',
      darker: '#003547'
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
    blue: {
      main: '#006699',
    },
  },
  typography: {
    fontFamily: "'Source Sans Pro', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  },
});

const fontHeader = {
  color: baseTheme.palette.text.primary,
  fontWeight: baseTheme.typography.fontWeightMedium,
  fontFamily: "'Roboto Condensed', sans-serif",
  textTransform: 'uppercase',
};

const theme = {
  ...baseTheme,
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body1",
          },
          style: {
            fontSize: 14,
          }
        },
        {
          props: {
            variant: "subtitle1",
          },
          style: {
            fontSize: 12,
          }
        },
      ]
    }
  },
  palette: {
    ...baseTheme.palette,
    background: {
      ...baseTheme.palette.background,
      default: baseTheme.palette.common.white,
      placeholder: '#464f4f',
    },
  },
  typography: {
    ...baseTheme.typography,
    fontHeader,
    h1: {
      ...baseTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      ...baseTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
    },
    h3: {
      ...baseTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...baseTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
    },
    h5: {
      ...baseTheme.typography.h5,
      fontSize: 20,
      fontWeight: baseTheme.typography.fontWeightLight,
    },
    h6: {
      ...baseTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    subtitle1: {
      ...baseTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...baseTheme.typography.body2,
      fontWeight: baseTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...baseTheme.typography.body1,
      fontSize: 14,
    },
  },
}
export default theme;