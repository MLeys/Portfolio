import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import styled from '@emotion/styled';

import MainHeader from './Components/MainHeader/MainHeader';
import IntroSection from './Components/IntroSection/IntroSection';
import ProjectsDisplay from './Components/ProjectsDisplay/ProjectsDisplay';
import TechDisplay from './Components/TechDisplay/TechDisplay';
import LandingSection from './Components/LandingDisplay/LandingDisplay';
import ContactForm from './Components/ContactForm/ContactForm';
import theme from './theme';

const MainDiv = styled('div') ({
  backgroundColor: theme.palette.blueGray.main,
  zIndex: -3,
  paddingBottom: 20,
})


function App() {


  return (
    <ThemeProvider theme={theme}>
      <MainDiv className='mainPage' >
        <MainHeader />
        <LandingSection />
        <IntroSection />
        <TechDisplay />
        <ProjectsDisplay />
        <ContactForm />
      </MainDiv>
    </ThemeProvider>

  )
}

export default App
