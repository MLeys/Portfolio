import React from 'react';
import { Container } from '@mui/material';

import MainHeader from '../../Components/MainHeader/MainHeader';
import IntroSection from '../../Components/IntroSection/IntroSection';
import TechSection from '../../Components/TechSection/TechSection';
import ProjectsDisplay from '../../Components/ProjectsDisplay/ProjectsDisplay';
import TechDisplay from '../../Components/TechDisplay/TechDisplay';

import LandingSection from '../../Components/LandingSection/LandingSection';

function Main() {
  return (
    <div className='mainPage'>
      <MainHeader />
      <LandingSection />
      <IntroSection />
      <TechDisplay />
      <ProjectsDisplay />
    </div>
    );
}

export default Main;