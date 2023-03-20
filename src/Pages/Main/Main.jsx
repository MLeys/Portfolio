import React from 'react';
import styled from '@emotion/styled';

import MainHeader from '../../Components/MainHeader/MainHeader';
import IntroSection from '../../Components/IntroSection/IntroSection';
import TechSection from '../../Components/TechSection/TechSection';
import ProjectsDisplay from '../../Components/ProjectsDisplay/ProjectsDisplay';
import TechDisplay from '../../Components/TechDisplay/TechDisplay';

import LandingSection from '../../Components/LandingSection/LandingSection';
import theme from '../../theme';

const MainDiv = styled('div') ({
  backgroundColor: theme.palette.blueGray.main,
  zIndex: -3,
})


function Main() {
  return (
    <MainDiv className='mainPage' >
      <MainHeader />
      <LandingSection />
      <IntroSection />
      <TechDisplay />
      <ProjectsDisplay />
    </MainDiv>
    );
}

export default Main;