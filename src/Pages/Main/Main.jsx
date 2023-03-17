import React from 'react';
import { Container } from '@mui/material';

import MainHeader from '../../Components/MainHeader/MainHeader';
import ProjectsSection from '../../Components/ProjectsSection/ProjectsSection';
import IntroSection from '../../Components/IntroSection/IntroSection';
import TechSection from '../../Components/TechSection/TechSection';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import LandingSection from '../../Components/LandingSection/LandingSection';

function Main() {
  return (
    <div className='mainPage'>
      <MainHeader />
      <LandingSection />
      <IntroSection />
      <TechSection />
      <ProjectsSection />
    </div>
    );
}

export default Main;