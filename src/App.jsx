import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import styled from '@emotion/styled';

import MainHeader from './Components/MainHeader/MainHeader';
import LandingDisplay from './Components/LandingDisplay/LandingDisplay';
import IntroSection from './Components/IntroSection/IntroSection';
import ProjectsDisplay from './Components/ProjectsDisplay/ProjectsDisplay';
import TechDisplay from './Components/TechDisplay/TechDisplay';
import ContactDisplay from './Components/ContactDisplay/ContactDisplay';
import ContactForm from './Components/ContactForm/ContactForm';

import theme from './theme';

const MainDiv = styled('div') ({
  backgroundColor: theme.palette.blueGray.light,
  zIndex: -3,
  paddingBottom: 20,
})


function App() {


  return (
    <ThemeProvider theme={theme}>
      <MainDiv className='mainPage' >
        <MainHeader />
        <LandingDisplay />
        <IntroSection />
        <TechDisplay />
        <ProjectsDisplay />
        <ContactDisplay />
      </MainDiv>
    </ThemeProvider>

  )
}

export default App
