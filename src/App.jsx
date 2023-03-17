import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

import Main from './Pages/Main/Main'

function App() {


  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
    </ThemeProvider>

  )
}

export default App
