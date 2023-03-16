import React from 'react';
import { Container } from '@mui/material';

import MainHeader from '../../Components/MainHeader/MainHeader';
import ProjectsSection from '../../Components/ProjectsSection/ProjectsSection';
import IntroSection from '../../Components/IntroSection/IntroSection';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';


function Main() {
  return (
    <div className='mainPage'>
      <MainHeader />
      <Container  sx={{ marginY: 5}}>
        <Grid2 spacing={10}>
          <IntroSection />
          <ProjectsSection />
        </Grid2>

      </Container>
    </div>
    );
}

export default Main;