import './App.css';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import styled from '@emotion/styled';

import * as codewarsApi from '././utils/codewarsApi.js'

import MainHeader from './Components/MainHeader/MainHeader';
import LandingDisplay from './Components/LandingDisplay/LandingDisplay';
import IntroSection from './Components/IntroSection/IntroSection';
import ProjectsDisplay from './Components/ProjectsDisplay/ProjectsDisplay';
import TechDisplay from './Components/TechDisplay/TechDisplay';
import ContactDisplay from './Components/ContactDisplay/ContactDisplay';
import ContactForm from './Components/ContactForm/ContactForm';
import GameSection from './Components/GameSection/GameSection';

import theme from './theme';




const gitHubStatsCommit = `https://github-readme-stats.vercel.app/api?username=mleys&theme=cobalt`;
  
const gitHubStatsLanguages = `https://github-readme-stats-sigma-five.vercel.app
  /api/top-langs/?username=Mleys&theme=react&line_height=40&hide=css`;

const MainDiv = styled('div') ({
  backgroundColor: theme.palette.blueGray.light,
  zIndex: -3,
  paddingBottom: 20,
})


const eventsUrl = 'https://api.github.com/users/mleys/events'


function App() {
  const [activity, setActivity] = useState([]);



  async function codewarsData(){
    await fetch("https://www.codewars.com/api/v1/users/mleys")
    .then(response => response.json())
    .then(data => {
      // Process the user object here
      console.log(data);
    })
    .catch(error => {
      // Handle any errors here
      console.error(error);
    });
  }


  async function getGitHubActivity() {
    const response = await fetch(`${eventsUrl}`);
    const data = await response.json()
    console.log(data[0])

    const pushEventsOnly = data.filter(
      (event) => event.type === "PushEvent" && event.payload.commits
    );

    // console.log(pushEventsOnly, "<<< PUSH EVENTS ONLY")

    const eventsObj = await pushEventsOnly.map(event => ({
      repo: event.repo.name.slice(6, event.repo.name.length),
      time: `${new Date(event.created_at).toLocaleDateString()} at ${new Date(event.created_at).toLocaleTimeString()}`,
      commits: event.payload.commits,
      message: event.payload.commits[0].message,
    }))
    // console.log(eventsObj)
    setActivity(eventsObj)
  }



  useEffect(() => {
    getGitHubActivity();
    codewarsData();
  }, []); 

  return (
    <ThemeProvider theme={theme}>
    <MainDiv className='mainPage' >
      <MainHeader />
      <LandingDisplay />
      <IntroSection  />
      <TechDisplay />
      <GameSection />
      <ProjectsDisplay />
        <p>Candidate: Knock, knock.</p>
        <p>Employer: Who's there?</p>
        <p>Candidate: Java.</p>
        <p>Employer: Java who?</p>
        <p>Candidate: Java seen my resume? I'm the perfect candidate for your software engineering position!</p>
        <a href='https://github.com/MLeys' ><img src={gitHubStatsCommit} /> </a>
      <ContactDisplay />
      
      {/* <img src='https://camo.githubusercontent.com/aa7c8748ceb9af766fa1be69e181747707e03df306d894f663f7dd41a6e04403/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6d6c657973267468656d653d7261646963616c'></img> */}
      {/* <a href="https://camo.githubusercontent.com/aa7c8748ceb9af766fa1be69e181747707e03df306d894f663f7dd41a6e04403/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6d6c657973267468656d653d7261646963616c"> hey</a> */}
       {/* <img align="center" src="https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=mleys&theme=react&line_height=40&hide=css"/> */}
    </MainDiv>
    </ThemeProvider>

  )
}

export default App
