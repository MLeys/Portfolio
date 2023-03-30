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
          <p>Candidate: Knock, knock.</p>
          <p>Employer: Who's there?</p>
          <p>Candidate: Java.</p>
          <p>Employer: Java who?</p>
          <p>Candidate: Java seen my resume? I'm the perfect candidate for your software engineering position!</p>
        <ContactDisplay />
      </MainDiv>
    </ThemeProvider>

  )
}

export default App
