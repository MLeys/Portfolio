import * as React from 'react';
import { styled } from '@mui/material/styles';
import LaunchIcon from '@mui/icons-material/Launch';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import { ImageBackdrop, ImageButton, Ribbon, CenteringBox, ImageBox } from '../StyledComps/StyledComps';
import { Projects } from '../../lists/projects';
// import { alignProperty } from '@mui/material/styles/cssUtils';
// import { ContrastTwoTone } from '@mui/icons-material';
import theme from '../../theme';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import ProjectCard from '../ProjectCard/ProjectCard';

const CornerIcon = styled(Box)({
  position: 'absolute',
  top: 0,
  right: 0,
  padding: 3,
  zIndex: 5,
  borderRadius: '25%',
  backgroundColor: theme.palette.orange.dark,
})

export default function ProjectsDisplay() {
  return (
    <Container className='section' id='projects'>
      <Typography variant="h3" marked="center" align="center" component="h2">
        Projects
      </Typography>
  
      {Projects.map((project) => (
        <Grid container mt={5}>
          <ProjectCard project={project} />
        
          <Grid xs={6}>
            <Typography variant='h6'> {project.description}</Typography>
            <Box >
              hellow
            </Box>
          </Grid>

        </Grid>
      ))}



     

      
    </Container>
  );
}
