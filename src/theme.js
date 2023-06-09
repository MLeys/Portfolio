import { createTheme } from '@mui/material/styles';
import { red, grey, green, deepOrange, blue, blueGrey, deepPurple} from '@mui/material/colors';

const baseTheme = createTheme({
  status: {
    danger: '#ff6600'
  },
  palette: {
    text: {
      primary: '#FFFFFF',
      secondary: '#000000',
    },
    primary: {
      main: '#009688',
      light: '#00ffe5',
      dark: '#004d44',
      contrastText: '#212121',
    },
    secondary: {
      main: '#607D8B',
      light: '#bee4e1',
      dark: '#006652',
      contrastText: '#e5f4f3'
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
      light: blue[300],
      main: blue[700],
      dark: blue[900],
      contrastText: blue[50],
    },
    blueGray: {
      light: blueGrey[400],
      main: blueGrey[700],
      dark: blueGrey[900],
      contrastText: blueGrey[50],
    },
    blueGray2: {
      light: blueGrey['A200'],
      main: blueGrey[800],
      dark: blueGrey['A700'],
      contrastText: blueGrey['A100'],
    },
    blueGrayLight: {
      light: blueGrey[50],
      main: blueGrey[100],
      dark: blueGrey[200],
      contrastText: blueGrey[900],
    },
    orange: {
      light: deepOrange['100'],
      main: deepOrange['A400'],
      dark: deepOrange[900],
      contrastText: deepOrange[50],
    },    
    purple: {
      light: deepPurple[100],
      main: deepPurple['A400'],
      dark: deepPurple[900],
      contrastText: deepPurple[50],
    },  
    background: {
      main: blueGrey[300],
    }  
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
    subtitle2: {
      ...baseTheme.typography.subtitle1,
      fontSize: 20,
    },
    body1: {
      ...baseTheme.typography.body2,
      fontWeight: baseTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...baseTheme.typography.body1,
      fontSize: 18,
    },
  },
}
export default theme;