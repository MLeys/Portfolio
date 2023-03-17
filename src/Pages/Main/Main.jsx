import React from 'react';
import { Container } from '@mui/material';

import MainHeader from '../../Components/MainHeader/MainHeader';
import ProjectsSection from '../../Components/ProjectsSection/ProjectsSection';
import IntroSection from '../../Components/IntroSection/IntroSection';
import TechSection from '../../Components/TechSection/TechSection';
import ProjectsDisplay from '../../Components/ProjectsDisplay/ProjectsDisplay';

import LandingSection from '../../Components/LandingSection/LandingSection';

function Main() {
  return (
    <div className='mainPage'>
      <MainHeader />
      <LandingSection />
      <IntroSection />
      <TechSection />
      <ProjectsDisplay />
    </div>
    );
}

export default Main;