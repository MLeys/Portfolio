import React from 'react';

import MainHeader from '../../Components/MainHeader/MainHeader';
import ProjectsSection from '../../Components/ProjectsSection/ProjectsSection';
import { Container } from '@mui/material';

function Main() {
  return (
    <div className='mainPage'>
      <MainHeader />
      <Container sx={{ marginY: 5}}>
        <ProjectsSection />
      </Container>
    </div>
    );
}

export default Main;