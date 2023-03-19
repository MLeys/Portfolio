import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { Projects } from '../../lists/projects';

import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectList from '../ProjectList/ProjectList';


export default function ProjectsDisplay() {
  return (
    <Container className='section' id='projects'>
      <Typography variant="h3" marked="center" align="center" component="h2">
        Projects
      </Typography>
  
      {Projects.map((project) => (
        <Grid container mt={5}>
          <ProjectCard project={project} />
          
          <Grid xs={12} sm={6}>
            <Typography variant='h6'> {project.description}</Typography>
            <Box >
              <ProjectList project={project} />
            </Box>
          </Grid>

        </Grid>
      ))}

    </Container>
  );
}
